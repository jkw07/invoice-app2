import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdatePaymentInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  method?: string;
}
