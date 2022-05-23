import { Module } from '@nestjs/common';
import { TacheController } from './tache.controller';
import { TacheService } from './tache.service';
import { TacheEntity } from './tache.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TacheEntity])],
  controllers: [TacheController],
  providers: [TacheService]
})
export class TacheModule {}
