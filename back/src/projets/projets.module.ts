import { Module } from '@nestjs/common';
import { ProjetsController } from './projets.controller';
import { ProjetsService } from './projets.service';
import { ProjetsEntity } from './projets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProjetsEntity])],
  controllers: [ProjetsController],
  providers: [ProjetsService]
})
export class ProjetsModule {}
