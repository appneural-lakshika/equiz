import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Quiz")
    .setDescription("Quiz API description")
    .setVersion("1.0")
    // .addBearerAuth(
    //   { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    //   'access-token',
    // )
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/swagger", app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
