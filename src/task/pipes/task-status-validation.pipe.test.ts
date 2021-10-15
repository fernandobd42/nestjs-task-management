import * as task_status_validation_pipe from "./task-status-validation.pipe"
// @ponicode
describe("transform", () => {
    let inst: any

    beforeEach(() => {
        inst = new task_status_validation_pipe.TaskStatusValidationPipe()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.transform("FooBar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.transform("eLIo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.transform("foOBar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.transform("DILLENBERG")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.transform("FOO")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.transform(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isStatusValid", () => {
    let inst: any

    beforeEach(() => {
        inst = new task_status_validation_pipe.TaskStatusValidationPipe()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.isStatusValid(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.isStatusValid(500)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.isStatusValid(429)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.isStatusValid([400, 404, 200, 429, 404, 400, 400])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.isStatusValid("done")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.isStatusValid(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
