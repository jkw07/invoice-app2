import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceCreateManyInput } from './invoice-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyInvoiceArgs {

    @Field(() => [InvoiceCreateManyInput], {nullable:false})
    @Type(() => InvoiceCreateManyInput)
    data!: Array<InvoiceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
