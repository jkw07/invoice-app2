import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceCreateInput } from './invoice-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneInvoiceArgs {

    @Field(() => InvoiceCreateInput, {nullable:false})
    @Type(() => InvoiceCreateInput)
    data!: InvoiceCreateInput;
}
