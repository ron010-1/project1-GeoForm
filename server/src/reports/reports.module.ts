import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { FirebaseService } from 'src/firebase/firebase.service';
import { FirebaseAdmin } from 'src/firebase/firebase.provider';

@Module({
  imports: [], 
  controllers: [ReportsController], 
  providers: [ReportsService, FirebaseService], 
  exports: [ReportsService], 
})
export class ReportsModule {}
