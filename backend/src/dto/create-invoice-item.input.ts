import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { VatRateType } from 'src/@generated/prisma/vat-rate-type.enum';

@InputType()
export class CreateInvoiceItemInput {
  @Field(() => Int, { nullable: true })
  @IsNumber()
  invoiceId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  productId: number | null;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Int)
  @IsNumber()
  quantity: number;

  @Field(() => Int)
  @IsNumber()
  unitPrice: number;

  @Field(() => VatRateType)
  @IsEnum(VatRateType)
  taxType: VatRateType;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  taxRate: number | null;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  discount: number | null;

  @Field(() => Int)
  @IsNumber()
  totalNet: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  totalTax: number | null;

  @Field(() => Int)
  @IsNumber()
  totalGross: number;
}
