/* eslint-disable prettier/prettier */


import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('User CRUD API')
    .setDescription('API documentation for User management')
    .setVersion('1.0.0')
    .addBearerAuth() // Include JWT auth if required
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);
}
