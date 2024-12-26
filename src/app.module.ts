/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    // Load configuration from .env
    ConfigModule.forRoot({
      isGlobal: true, // Makes configuration globally available
    }),
    // Use MongoDB URI from environment variables
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
  ],
})
export class AppModule {}
