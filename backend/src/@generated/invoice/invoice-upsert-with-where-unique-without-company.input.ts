import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InvoiceWhereUniqueInput } from './invoice-where-unique.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateWithoutCompanyInput } from './invoice-update-without-company.input';
import { InvoiceCreateWithoutCompanyInput } from './invoice-create-without-company.input';

@InputType()
export class InvoiceUpsertWithWhereUniqueWithoutCompanyInput {

    @Field(() => InvoiceWhereUniqueInput, {nullable:false})
    @Type(() => InvoiceWhereUniqueInput)
    where!: Prisma.AtLeast<InvoiceWhereUniqueInput, 'id'>;

    @Field(() => InvoiceUpdateWithoutCompanyInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutCompanyInput)
    update!: InvoiceUpdateWithoutCompanyInput;

    @Field(() => InvoiceCreateWithoutCompanyInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutCompanyInput)
    create!: InvoiceCreateWithoutCompanyInput;
}
