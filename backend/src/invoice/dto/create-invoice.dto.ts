import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { Status } from 'src/@generated/prisma/status.enum';

export class CreateInvoiceDto {
  @IsNumber()
  companyId: number;

  @IsNumber()
  buyerId: number;

  @IsNumber()
  paymentId: number;

  @IsOptional()
  @IsString()
  recipient?: string | null;

  @IsString()
  invoiceType: string;

  @IsString()
  invoiceNo: string;

  @IsDateString()
  issuedDate: string;

  @IsOptional()
  @IsDateString()
  transactionDate?: string | null;

  @IsDateString()
  dueDate: string;

  @IsString()
  paymentMethod: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: string | null;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsNumber()
  totalAmount: number;

  @IsString()
  currency: string;

  @IsEnum(Status)
  status: Status;
}
