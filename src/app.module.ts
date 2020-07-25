import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TaskModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
