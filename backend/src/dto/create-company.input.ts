import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

@InputType()
export class CreateCompanyInput {
  @Field(() => String)
  @IsString()
  @Length(2, 100)
  fullName: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  shortName: string | null;

  @Field(() => String)
  @IsString()
  tin: string;

  @Field(() => String)
  @IsString()
  bin: string;

  @Field(() => String)
  @IsString()
  street: string;

  @Field(() => String)
  @IsString()
  buildingNo: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  apartmentNo: string | null;

  @Field(() => String)
  @IsString()
  zipCode: string;

  @Field(() => String)
  @IsString()
  city: string;

  @Field(() => String)
  @IsString()
  province: string;

  @Field(() => String)
  @IsString()
  county: string;

  @Field(() => String)
  @IsString()
  municipality: string;

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsOptional()
  email: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phone: string | null;
}
