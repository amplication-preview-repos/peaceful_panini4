import { Module } from "@nestjs/common";
import { ExerciseModuleBase } from "./base/exercise.module.base";
import { ExerciseService } from "./exercise.service";
import { ExerciseController } from "./exercise.controller";

@Module({
  imports: [ExerciseModuleBase],
  controllers: [ExerciseController],
  providers: [ExerciseService],
  exports: [ExerciseService],
})
export class ExerciseModule {}
