import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './reports/entity/report.entity';
import { Support } from './supports/entity/support.entity';
import { Supervisor } from './supervisor/entity/supervisor.entity';
import { SupervisorModule } from './supervisor/supervisor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USERNAME_POSTGIS,
      password: process.env.PASSWORD_POSTGIS,
      database: process.env.DATABASE_POSTGIS,
      entities: [Report, Support, Supervisor],
      synchronize: true,
    }),
    ReportsModule,
    SupervisorModule
  ],
})
export class AppModule {}
