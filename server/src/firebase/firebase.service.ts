import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FirebaseAdmin } from './firebase.provider';

@Injectable()
export class FirebaseService {
  constructor(
    @Inject(FirebaseAdmin) private readonly firebaseApp: admin.app.App,
  ) {}

  getFirestore() {
    return this.firebaseApp.firestore();
  }
}
