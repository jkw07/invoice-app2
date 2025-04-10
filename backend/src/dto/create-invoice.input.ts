import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { Status } from 'src/@generated/prisma/status.enum';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateInvoiceInput {
  @Field(() => Int)
  @IsNumber()
  companyId: number;

  @Field(() => Int)
  @IsNumber()
  buyerId: number;

  @Field(() => Int)
  @IsNumber()
  paymentId: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  recipient: string | null;

  @Field(() => String)
  @IsString()
  invoiceType: string;

  @Field(() => String)
  @IsString()
  invoiceNo: string;

  @Field(() => String)
  @IsDateString()
  issuedDate: string;

  @Field(() => String, { nullable: true })
  @IsDateString()
  @IsOptional()
  transactionDate: string | null;

  @Field(() => String)
  @IsDateString()
  dueDate: string;

  @Field(() => String)
  @IsString()
  paymentMethod: string;

  @Field(() => String, { nullable: true })
  @IsDateString()
  @IsOptional()
  paymentDate: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  description: string | null;

  @Field(() => Float)
  @IsNumber()
  totalAmount: number;

  @Field(() => String)
  @IsString()
  currency: string;

  @Field(() => Status)
  @IsEnum(Status)
  status: Status;
}
