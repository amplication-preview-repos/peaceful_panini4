import { Module } from "@nestjs/common";
import { ExerciseTemplateModuleBase } from "./base/exerciseTemplate.module.base";
import { ExerciseTemplateService } from "./exerciseTemplate.service";
import { ExerciseTemplateController } from "./exerciseTemplate.controller";

@Module({
  imports: [ExerciseTemplateModuleBase],
  controllers: [ExerciseTemplateController],
  providers: [ExerciseTemplateService],
  exports: [ExerciseTemplateService],
})
export class ExerciseTemplateModule {}
