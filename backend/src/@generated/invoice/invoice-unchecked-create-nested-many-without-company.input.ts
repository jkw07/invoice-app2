import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceCreateWithoutCompanyInput } from './invoice-create-without-company.input';
import { Type } from 'class-transformer';
import { InvoiceCreateOrConnectWithoutCompanyInput } from './invoice-create-or-connect-without-company.input';
import { InvoiceCreateManyCompanyInputEnvelope } from './invoice-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';

@InputType()
export class InvoiceUncheckedCreateNestedManyWithoutCompanyInput {

    @Field(() => [InvoiceCreateWithoutCompanyInput], {nullable:true})
    @Type(() => InvoiceCreateWithoutCompanyInput)
    create?: Array<InvoiceCreateWithoutCompanyInput>;

    @Field(() => [InvoiceCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => InvoiceCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<InvoiceCreateOrConnectWithoutCompanyInput>;

    @Field(() => InvoiceCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => InvoiceCreateManyCompanyInputEnvelope)
    createMany?: InvoiceCreateManyCompanyInputEnvelope;

    @Field(() => [InvoiceWhereUniqueInput], {nullable:true})
    @Type(() => InvoiceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>>;
}
