import { Module } from "@nestjs/common";
import { ExerciseModule } from "./exercise/exercise.module";
import { TrainingModule } from "./training/training.module";
import { UserModule } from "./user/user.module";
import { ExerciseTemplateModule } from "./exerciseTemplate/exerciseTemplate.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    ExerciseModule,
    TrainingModule,
    UserModule,
    ExerciseTemplateModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
