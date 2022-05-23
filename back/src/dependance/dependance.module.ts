import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DependanceController } from './dependance.controller';
import { DependanceEntity } from './dependance.entity';
import { DependanceService } from './dependance.service';

@Module({
  imports : [TypeOrmModule.forFeature([DependanceEntity])],
  controllers: [DependanceController],
  providers: [DependanceService]
})
export class DependanceModule {}
