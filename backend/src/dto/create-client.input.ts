import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateClientInput {
  @Field(() => Int)
  @IsNumber()
  companyId: number;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  tin: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  bin: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  street: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  buildingNo: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  apartmentNo: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  zipCode: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  city: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  country: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  province: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  county: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  municipality: string | null;

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  email: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phone: string | null;
}
