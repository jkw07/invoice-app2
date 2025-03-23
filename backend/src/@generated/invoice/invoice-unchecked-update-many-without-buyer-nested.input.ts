import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutBuyerInput } from './invoice-create-without-buyer.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutBuyerInput } from './invoice-create-or-connect-without-buyer.input';
import { InvoiceUpsertWithWhereUniqueWithoutBuyerInput } from './invoice-upsert-with-where-unique-without-buyer.input';
import { InvoiceCreateManyBuyerInputEnvelope } from './invoice-create-many-buyer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { InvoiceUpdateWithWhereUniqueWithoutBuyerInput } from './invoice-update-with-where-unique-without-buyer.input';
import { InvoiceUpdateManyWithWhereWithoutBuyerInput } from './invoice-update-many-with-where-without-buyer.input';
import { InvoiceScalarWhereInput } from './invoice-scalar-where.input';

@InputType()
export class InvoiceUncheckedUpdateManyWithoutBuyerNestedInput {

    @Field(() => [InvoiceCreateWithoutBuyerInput], {nullable:true})
    @Type(() => InvoiceCreateWithoutBuyerInput)
    create?: Array<InvoiceCreateWithoutBuyerInput>;

    @Field(() => [InvoiceCreateOrConnectWithoutBuyerInput], {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutBuyerInput)
    connectOrCreate?: Array<InvoiceCreateOrConnectWithoutBuyerInput>;

    @Field(() => [InvoiceUpsertWithWhereUniqueWithoutBuyerInput], {nullable:true})
    @Type(() => InvoiceUpsertWithWhereUniqueWithoutBuyerInput)
    upsert?: Array<InvoiceUpsertWithWhereUniqueWithoutBuyerInput>;

    @Field(() => InvoiceCreateManyBuyerInputEnvelope, {nullable:true})
    @Type(() => InvoiceCreateManyBuyerInputEnvelope)
    createMany?: InvoiceCreateManyBuyerInputEnvelope;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;

    @Field(() => [InvoiceUpdateWithWhereUniqueWithoutBuyerInput], {nullable:true})
    @Type(() => InvoiceUpdateWithWhereUniqueWithoutBuyerInput)
    update?: Array<InvoiceUpdateWithWhereUniqueWithoutBuyerInput>;

    @Field(() => [InvoiceUpdateManyWithWhereWithoutBuyerInput], {nullable:true})
    @Type(() => InvoiceUpdateManyWithWhereWithoutBuyerInput)
    updateMany?: Array<InvoiceUpdateManyWithWhereWithoutBuyerInput>;

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    @Type(() => InvoiceScalarWhereInput)
    deleteMany?: Array<InvoiceScalarWhereInput>;
}
