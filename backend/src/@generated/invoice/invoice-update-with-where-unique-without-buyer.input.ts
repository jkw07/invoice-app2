import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateWithoutBuyerInput } from './invoice-update-without-buyer.input';

@InputType()
export class InvoiceUpdateWithWhereUniqueWithoutBuyerInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceUpdateWithoutBuyerInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutBuyerInput)
    data!: InvoiceUpdateWithoutBuyerInput;
}
