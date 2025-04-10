import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateSettingInput {
  @Field(() => Int)
  @IsNumber()
  companyId: number;

  @Field(() => String)
  @IsString()
  defaultCurrency: string;

  @Field(() => String)
  @IsBoolean()
  exemptFromTax: boolean;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDateString()
  createdAt?: Date;
}
