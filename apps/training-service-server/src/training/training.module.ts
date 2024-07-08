import { Module } from "@nestjs/common";
import { TrainingModuleBase } from "./base/training.module.base";
import { TrainingService } from "./training.service";
import { TrainingController } from "./training.controller";

@Module({
  imports: [TrainingModuleBase],
  controllers: [TrainingController],
  providers: [TrainingService],
  exports: [TrainingService],
})
export class TrainingModule {}
