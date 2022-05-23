import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetsModule } from './projets/projets.module';
import { PlatformModule } from './platform/platform.module';
import { TacheModule } from './tache/tache.module';
import { TypeProjetModule } from './type-projet/type-projet.module';
import { DefaultTaskModule } from './default-task/default-task.module';
import { DependanceModule } from './dependance/dependance.module';
import { EmployeeModule } from './employee/employee.module';
import { ServiceModule } from './service/service.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gestion-projet',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }

    ),
    ProjetsModule,
    PlatformModule,
    TacheModule,
    TypeProjetModule,
    DefaultTaskModule,
    DependanceModule,
    EmployeeModule,
    ServiceModule,
    AuthModule
  ],
 
})
export class AppModule {}
