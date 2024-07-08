/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ExerciseListRelationFilter } from "../../exercise/base/ExerciseListRelationFilter";
import { EnumTrainingStatus } from "./EnumTrainingStatus";

@InputType()
class TrainingWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  userId?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ExerciseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ExerciseListRelationFilter)
  @IsOptional()
  @Field(() => ExerciseListRelationFilter, {
    nullable: true,
  })
  exercises?: ExerciseListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumTrainingStatus,
  })
  @IsEnum(EnumTrainingStatus)
  @IsOptional()
  @Field(() => EnumTrainingStatus, {
    nullable: true,
  })
  status?: "Pending" | "Progress" | "Completed" | "Deleted";
}

export { TrainingWhereInput as TrainingWhereInput };
