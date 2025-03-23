import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateClientInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  tin?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  bin?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  street?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  buildingNo?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  apartmentNo?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  zipCode?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  city?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  province?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  county?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  municipality?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  phone?: string | null;
}
