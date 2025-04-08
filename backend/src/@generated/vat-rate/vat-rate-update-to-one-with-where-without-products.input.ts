import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateWhereInput } from './vat-rate-where.input';
import { Type } from 'class-transformer';
import { VatRateUpdateWithoutProductsInput } from './vat-rate-update-without-products.input';

@InputType()
export class VatRateUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    where?: VatRateWhereInput;

    @Field(() => VatRateUpdateWithoutProductsInput, {nullable:false})
    @Type(() => VatRateUpdateWithoutProductsInput)
    data!: VatRateUpdateWithoutProductsInput;
}
