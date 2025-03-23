import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutBuyerInput } from './invoice-create-without-buyer.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutBuyerInput } from './invoice-create-or-connect-without-buyer.input';
import { InvoiceCreateManyBuyerInputEnvelope } from './invoice-create-many-buyer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';

@InputType()
export class InvoiceUncheckedCreateNestedManyWithoutBuyerInput {

    @Field(() => [InvoiceCreateWithoutBuyerInput], {nullable:true})
    @Type(() => InvoiceCreateWithoutBuyerInput)
    create?: Array<InvoiceCreateWithoutBuyerInput>;

    @Field(() => [InvoiceCreateOrConnectWithoutBuyerInput], {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutBuyerInput)
    connectOrCreate?: Array<InvoiceCreateOrConnectWithoutBuyerInput>;

    @Field(() => InvoiceCreateManyBuyerInputEnvelope, {nullable:true})
    @Type(() => InvoiceCreateManyBuyerInputEnvelope)
    createMany?: InvoiceCreateManyBuyerInputEnvelope;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;
}
