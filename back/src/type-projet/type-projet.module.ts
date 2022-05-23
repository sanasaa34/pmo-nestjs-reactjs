import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeProjetController } from './type-projet.controller';
import { TypeProjetEntity } from './type-projet.entity';
import { TypeProjetService } from './type-projet.service';

@Module({
  imports :[TypeOrmModule.forFeature([TypeProjetEntity])],
  controllers: [TypeProjetController],
  providers: [TypeProjetService]
})
export class TypeProjetModule {}
