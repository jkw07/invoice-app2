import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceUpdateWithoutInvoiceItemsInput } from './invoice-update-without-invoice-items.input';
import { Type } from 'class-transformer';
import { InvoiceCreateWithoutInvoiceItemsInput } from './invoice-create-without-invoice-items.input';
import { InvoiceWhereInput } from './invoice-where.input';

@InputType()
export class InvoiceUpsertWithoutInvoiceItemsInput {

    @Field(() => InvoiceUpdateWithoutInvoiceItemsInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutInvoiceItemsInput)
    update!: InvoiceUpdateWithoutInvoiceItemsInput;

    @Field(() => InvoiceCreateWithoutInvoiceItemsInput, {nullable:false})
    @Type(() => InvoiceCreateWithoutInvoiceItemsInput)
    create!: InvoiceCreateWithoutInvoiceItemsInput;

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    where?: InvoiceWhereInput;
}
