import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => Int)
  @IsNumber()
  companyId: number;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  description: string | null;

  @Field(() => Float)
  @IsNumber()
  price: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  unit: string | null;

  @Field(() => Int)
  @IsNumber()
  vatRateId: number;
}
