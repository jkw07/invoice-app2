import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateClientDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  tin?: string | null;

  @IsOptional()
  @IsString()
  bin?: string | null;

  @IsOptional()
  @IsString()
  street?: string | null;

  @IsOptional()
  @IsString()
  buildingNo?: string | null;

  @IsOptional()
  @IsString()
  apartmentNo?: string | null;

  @IsOptional()
  @IsString()
  zipCode?: string | null;

  @IsOptional()
  @IsString()
  city?: string | null;

  @IsOptional()
  @IsString()
  province?: string | null;

  @IsOptional()
  @IsString()
  county?: string | null;

  @IsOptional()
  @IsString()
  municipality?: string | null;

  @IsOptional()
  @IsEmail()
  email?: string | null;

  @IsOptional()
  @IsString()
  phone?: string | null;
}
