import { Module } from '@nestjs/common';
import { DefaultTaskController } from './default-task.controller';
import { DefaultTaskService } from './default-task.service';
import { DefaultTaskEntity } from './default-task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([DefaultTaskEntity])],
  controllers: [DefaultTaskController],
  providers: [DefaultTaskService]
})
export class DefaultTaskModule {}
