// src/firebase/firebase.provider.ts

import { Provider } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import { ServiceAccount } from 'firebase-admin';

export const FirebaseAdmin = 'FirebaseAdmin';

export const firebaseProviders: Provider[] = [
  {
    provide: FirebaseAdmin,
    useFactory: (configService: ConfigService) => {
      const adminConfig: ServiceAccount = {
        projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
        privateKey: configService.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
        clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
      };

      return admin.initializeApp({
        credential: admin.credential.cert(adminConfig),
        databaseURL: 'https://agendamentoscrm-c278f.firebaseio.com',
      });
    },
    inject: [ConfigService],
  },
];
