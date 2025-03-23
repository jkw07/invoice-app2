import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateWithoutBuyerInput } from './invoice-update-without-buyer.input';
import { InvoiceCreateWithoutBuyerInput } from './invoice-create-without-buyer.input';

@InputType()
export class InvoiceUpsertWithWhereUniqueWithoutBuyerInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceUpdateWithoutBuyerInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutBuyerInput)
    update!: InvoiceUpdateWithoutBuyerInput;

    @Field(() => InvoiceCreateWithoutBuyerInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutBuyerInput)
    create!: InvoiceCreateWithoutBuyerInput;
}
