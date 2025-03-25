import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { VatRateType } from 'src/@generated/prisma/vat-rate-type.enum';

@InputType()
export class CreateProductInput {
  @Field(() => Int)
  @IsNumber()
  companyId: number;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string | null;

  @Field(() => Float)
  @IsNumber()
  price: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  unit?: string | null;

  @Field(() => VatRateType)
  @IsEnum(VatRateType)
  taxType: VatRateType;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  taxRate?: number | null;
}
