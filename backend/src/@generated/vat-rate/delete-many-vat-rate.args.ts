import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VatRateWhereInput } from './vat-rate-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyVatRateArgs {

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    where?: VatRateWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
