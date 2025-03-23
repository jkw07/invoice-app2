import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceItemCreateInput } from './invoice-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneInvoiceItemArgs {

    @Field(() => InvoiceItemCreateInput, {nullable:false})
    @Type(() => InvoiceItemCreateInput)
    data!: InvoiceItemCreateInput;
}
