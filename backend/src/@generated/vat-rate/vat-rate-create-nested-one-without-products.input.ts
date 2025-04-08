import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateCreateWithoutProductsInput } from './vat-rate-create-without-products.input';
import { Type } from 'class-transformer';
import { VatRateCreateOrConnectWithoutProductsInput } from './vat-rate-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';

@InputType()
export class VatRateCreateNestedOneWithoutProductsInput {

    @Field(() => VatRateCreateWithoutProductsInput, {nullable:true})
    @Type(() => VatRateCreateWithoutProductsInput)
    create?: VatRateCreateWithoutProductsInput;

    @Field(() => VatRateCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => VatRateCreateOrConnectWithoutProductsInput)
    connectOrCreate?: VatRateCreateOrConnectWithoutProductsInput;

    @Field(() => VatRateWhereUniqueInput, {nullable:true})
    @Type(() => VatRateWhereUniqueInput)
    connect?: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;
}
