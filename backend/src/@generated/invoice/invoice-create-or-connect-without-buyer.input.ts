import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceCreateWithoutBuyerInput } from './invoice-create-without-buyer.input';

@InputType()
export class InvoiceCreateOrConnectWithoutBuyerInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceCreateWithoutBuyerInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutBuyerInput)
    create!: InvoiceCreateWithoutBuyerInput;
}
