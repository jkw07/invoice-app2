import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceItemCreateManyInput } from './invoice-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyInvoiceItemArgs {

    @Field(() => [InvoiceItemCreateManyInput], {nullable:false})
    @Type(() => InvoiceItemCreateManyInput)
    data!: Array<InvoiceItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
