import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateWhereInput } from './vat-rate-where.input';
import { Type } from 'class-transformer';

@InputType()
export class VatRateScalarRelationFilter {

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    is?: VatRateWhereInput;

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    isNot?: VatRateWhereInput;
}
