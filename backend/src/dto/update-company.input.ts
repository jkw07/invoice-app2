import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsEmail, Length } from 'class-validator';

@InputType()
export class UpdateCompanyInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @Length(2, 100)
  fullName?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  shortName?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  tin?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  bin?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  street?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  buildingNo?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  apartmentNo?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  zipCode?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  city?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  province?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  county?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  municipality?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  phone?: string | null;
}
