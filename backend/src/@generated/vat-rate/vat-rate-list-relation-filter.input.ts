import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateWhereInput } from './vat-rate-where.input';
import { Type } from 'class-transformer';

@InputType()
export class VatRateListRelationFilter {

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    every?: VatRateWhereInput;

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    some?: VatRateWhereInput;

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    none?: VatRateWhereInput;
}
