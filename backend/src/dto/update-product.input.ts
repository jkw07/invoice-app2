import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateProductInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string | null;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  price?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  unit?: string | null;

  @Field(() => Float, { nullable: true })
  @IsNumber()
  @IsOptional()
  vatRateId?: number;
}
