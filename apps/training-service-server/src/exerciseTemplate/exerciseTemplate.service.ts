import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExerciseTemplateServiceBase } from "./base/exerciseTemplate.service.base";

@Injectable()
export class ExerciseTemplateService extends ExerciseTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
