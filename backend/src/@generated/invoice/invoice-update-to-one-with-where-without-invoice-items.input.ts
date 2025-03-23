import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceWhereInput } from './invoice-where.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateWithoutInvoiceItemsInput } from './invoice-update-without-invoice-items.input';

@InputType()
export class InvoiceUpdateToOneWithWhereWithoutInvoiceItemsInput {

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    where?: InvoiceWhereInput;

    @Field(() => InvoiceUpdateWithoutInvoiceItemsInput, {nullable:false})
    @Type(() => InvoiceUpdateWithoutInvoiceItemsInput)
    data!: InvoiceUpdateWithoutInvoiceItemsInput;
}
