import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutCompanyInput } from './invoice-create-without-company.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutCompanyInput } from './invoice-create-or-connect-without-company.input';
import { InvoiceUpsertWithWhereUniqueWithoutCompanyInput } from './invoice-upsert-with-where-unique-without-company.input';
import { InvoiceCreateManyCompanyInputEnvelope } from './invoice-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { InvoiceUpdateWithWhereUniqueWithoutCompanyInput } from './invoice-update-with-where-unique-without-company.input';
import { InvoiceUpdateManyWithWhereWithoutCompanyInput } from './invoice-update-many-with-where-without-company.input';
import { InvoiceScalarWhereInput } from './invoice-scalar-where.input';

@InputType()
export class InvoiceUpdateManyWithoutCompanyNestedInput {

    @Field(() => [InvoiceCreateWithoutCompanyInput], {nullable:true})
    @Type(() => InvoiceCreateWithoutCompanyInput)
    create?: Array<InvoiceCreateWithoutCompanyInput>;

    @Field(() => [InvoiceCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<InvoiceCreateOrConnectWithoutCompanyInput>;

    @Field(() => [InvoiceUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => InvoiceUpsertWithWhereUniqueWithoutCompanyInput)
    upsert?: Array<InvoiceUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => InvoiceCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => InvoiceCreateManyCompanyInputEnvelope)
    createMany?: InvoiceCreateManyCompanyInputEnvelope;

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

    @Field(() => [InvoiceUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => InvoiceUpdateWithWhereUniqueWithoutCompanyInput)
    update?: Array<InvoiceUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [InvoiceUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    @Type(() => InvoiceUpdateManyWithWhereWithoutCompanyInput)
    updateMany?: Array<InvoiceUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [InvoiceScalarWhereInput], {nullable:true})
    @Type(() => InvoiceScalarWhereInput)
    deleteMany?: Array<InvoiceScalarWhereInput>;
}
