import { TaskStatus } from '../task.interface';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
