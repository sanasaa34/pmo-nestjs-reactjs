import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceController } from './service.controller';
import { ServiceEntity } from './service.entity';
import { ServiceService } from './service.service';

@Module({
  imports :[TypeOrmModule.forFeature([ServiceEntity])],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}
