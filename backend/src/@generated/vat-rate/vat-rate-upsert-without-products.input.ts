import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateUpdateWithoutProductsInput } from './vat-rate-update-without-products.input';
import { Type } from 'class-transformer';
import { VatRateCreateWithoutProductsInput } from './vat-rate-create-without-products.input';
import { VatRateWhereInput } from './vat-rate-where.input';

@InputType()
export class VatRateUpsertWithoutProductsInput {

    @Field(() => VatRateUpdateWithoutProductsInput, {nullable:false})
    @Type(() => VatRateUpdateWithoutProductsInput)
    update!: VatRateUpdateWithoutProductsInput;

    @Field(() => VatRateCreateWithoutProductsInput, {nullable:false})
    @Type(() => VatRateCreateWithoutProductsInput)
    create!: VatRateCreateWithoutProductsInput;

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    where?: VatRateWhereInput;
}
