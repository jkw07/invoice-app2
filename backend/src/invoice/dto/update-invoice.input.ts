import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { Status } from 'src/@generated/prisma/status.enum';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  IsEnum,
} from 'class-validator';

@InputType()
export class UpdateInvoiceInput {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  buyerId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  paymentId?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  recipient?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  invoiceType?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  invoiceNo?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsDateString()
  issuedDate?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsDateString()
  transactionDate?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  totalAmount?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  currency?: string;

  @Field(() => Status, { nullable: true })
  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
