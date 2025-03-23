import { Status } from 'src/@generated/prisma/status.enum';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  IsEnum,
} from 'class-validator';

export class UpdateInvoiceDto {
  @IsOptional()
  @IsNumber()
  buyerId?: number;

  @IsOptional()
  @IsNumber()
  paymentId?: number;

  @IsOptional()
  @IsString()
  recipient?: string | null;

  @IsOptional()
  @IsString()
  invoiceType?: string;

  @IsOptional()
  @IsString()
  invoiceNo?: string;

  @IsOptional()
  @IsDateString()
  issuedDate?: string;

  @IsOptional()
  @IsDateString()
  transactionDate?: string | null;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: string | null;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsNumber()
  totalAmount?: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
