import { InputType, Field, Float } from '@nestjs/graphql';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { VatRateType } from 'src/@generated/prisma/vat-rate-type.enum';

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

  @Field(() => VatRateType, { nullable: true })
  @IsOptional()
  @IsEnum(VatRateType)
  status?: VatRateType;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  taxRate?: number | null;
}
