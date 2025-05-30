import { Module, Global } from '@nestjs/common';
import * as admin from 'firebase-admin';

export const FirebaseAdmin = 'FirebaseAdmin';

@Global()
@Module({
  providers: [
    {
      provide: FirebaseAdmin,
      useFactory: () => {
        const app = admin.initializeApp({
          credential: admin.credential.applicationDefault(),
        });
        return app;
      },
    },
  ],
  exports: [FirebaseAdmin],
})
export class FirebaseModule {}
