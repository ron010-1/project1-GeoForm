import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { FirebaseService } from 'src/firebase/firebase.service';
import { randomUUID } from 'crypto';

@Injectable()
export class ReportsService {
  private firestore;
  private collection;

  constructor(private readonly firebaseService: FirebaseService) {
    this.firestore = this.firebaseService.getFirestore();
    this.collection = this.firestore.collection('reports');
  }

  getHello(): string {
    return 'Esta reports!';
  }

  async createReport(report: CreateReportDto) {
    const id = randomUUID();
    const date = new Date(Date.now());
    const data = {
        id, 
        ...report,
        status: 'pending',
        createdAt: date.toISOString(),
        updatedAt: date.toISOString(),
        supportCount: 0
    }; 
    await this.collection.doc(id).set(data);
    return data;
  };
}
