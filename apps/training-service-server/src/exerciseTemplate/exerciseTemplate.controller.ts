import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExerciseTemplateService } from "./exerciseTemplate.service";
import { ExerciseTemplateControllerBase } from "./base/exerciseTemplate.controller.base";

@swagger.ApiTags("exerciseTemplates")
@common.Controller("exerciseTemplates")
export class ExerciseTemplateController extends ExerciseTemplateControllerBase {
  constructor(protected readonly service: ExerciseTemplateService) {
    super(service);
  }
}
