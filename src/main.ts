/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { setupSwagger } from './module/api-docs/swagger-setup'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set the global prefix for API routes
  const globalprefix = 'api';
  app.setGlobalPrefix(globalprefix);

  const PORT = process.env.PORT || 3000;

  // Set up Swagger documentation
  setupSwagger(app);

  await app.listen(PORT, () => {
    Logger.log('listening at http://localhost:' + PORT + '/' + globalprefix);
    Logger.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
}
bootstrap();
