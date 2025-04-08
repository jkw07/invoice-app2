import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateCreateWithoutProductsInput } from './vat-rate-create-without-products.input';
import { Type } from 'class-transformer';
import { VatRateCreateOrConnectWithoutProductsInput } from './vat-rate-create-or-connect-without-products.input';
import { VatRateUpsertWithoutProductsInput } from './vat-rate-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';
import { VatRateUpdateToOneWithWhereWithoutProductsInput } from './vat-rate-update-to-one-with-where-without-products.input';

@InputType()
export class VatRateUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => VatRateCreateWithoutProductsInput, {nullable:true})
    @Type(() => VatRateCreateWithoutProductsInput)
    create?: VatRateCreateWithoutProductsInput;

    @Field(() => VatRateCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => VatRateCreateOrConnectWithoutProductsInput)
    connectOrCreate?: VatRateCreateOrConnectWithoutProductsInput;

    @Field(() => VatRateUpsertWithoutProductsInput, {nullable:true})
    @Type(() => VatRateUpsertWithoutProductsInput)
    upsert?: VatRateUpsertWithoutProductsInput;

    @Field(() => VatRateWhereUniqueInput, {nullable:true})
    @Type(() => VatRateWhereUniqueInput)
    connect?: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;

    @Field(() => VatRateUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => VatRateUpdateToOneWithWhereWithoutProductsInput)
    update?: VatRateUpdateToOneWithWhereWithoutProductsInput;
}
