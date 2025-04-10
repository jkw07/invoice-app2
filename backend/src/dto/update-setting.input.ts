import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, IsDateString } from 'class-validator';

@InputType()
export class UpdateSettingInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  defaultCurrency?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsBoolean()
  exemptFromTax?: boolean;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDateString()
  createdAt?: Date;
}
