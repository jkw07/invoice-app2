import { IsString, IsOptional, IsEmail, Length } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @Length(2, 100)
  fullName: string;

  @IsOptional()
  @IsString()
  shortName?: string | null;

  @IsString()
  tin: string;

  @IsString()
  bin: string;

  @IsString()
  street: string;

  @IsString()
  buildingNo: string;

  @IsOptional()
  @IsString()
  apartmentNo?: string | null;

  @IsString()
  zipCode: string;

  @IsString()
  city: string;

  @IsString()
  province: string;

  @IsString()
  county: string;

  @IsString()
  municipality: string;

  @IsOptional()
  @IsEmail()
  email?: string | null;

  @IsOptional()
  @IsString()
  phone?: string | null;
}
