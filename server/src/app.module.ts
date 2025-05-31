import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './reports/entity/report.entity';
import { Support } from './supports/entity/support.entity';

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
      entities: [Report, Support],
      synchronize: true
    }),
    ReportsModule
  ],
})
export class AppModule {}
