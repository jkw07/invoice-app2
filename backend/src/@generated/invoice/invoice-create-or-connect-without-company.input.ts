import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceCreateWithoutCompanyInput } from './invoice-create-without-company.input';

@InputType()
export class InvoiceCreateOrConnectWithoutCompanyInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceCreateWithoutCompanyInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutCompanyInput)
    create!: InvoiceCreateWithoutCompanyInput;
}
