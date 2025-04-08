import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';
import { Type } from 'class-transformer';
import { VatRateCreateWithoutProductsInput } from './vat-rate-create-without-products.input';

@InputType()
export class VatRateCreateOrConnectWithoutProductsInput {

    @Field(() => VatRateWhereUniqueInput, {nullable:false})
    @Type(() => VatRateWhereUniqueInput)
    where!: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;

    @Field(() => VatRateCreateWithoutProductsInput, {nullable:false})
    @Type(() => VatRateCreateWithoutProductsInput)
    create!: VatRateCreateWithoutProductsInput;
}
