import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceItemCreateManyInvoiceInput } from './invoice-item-create-many-invoice.input';
import { Type } from 'class-transformer';

@InputType()
export class InvoiceItemCreateManyInvoiceInputEnvelope {

    @Field(() => [InvoiceItemCreateManyInvoiceInput], {nullable:false})
    @Type(() => InvoiceItemCreateManyInvoiceInput)
    data!: Array<InvoiceItemCreateManyInvoiceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
