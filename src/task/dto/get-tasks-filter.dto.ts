import { TaskStatus } from '../task-status.enum';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([...Object.values(TaskStatus)])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
