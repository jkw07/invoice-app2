import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceItemScalarWhereInput } from './invoice-item-scalar-where.input';
import { Type } from 'class-transformer';
import { InvoiceItemUpdateManyMutationInput } from './invoice-item-update-many-mutation.input';

@InputType()
export class InvoiceItemUpdateManyWithWhereWithoutInvoiceInput {

    @Field(() => InvoiceItemScalarWhereInput, {nullable:false})
    @Type(() => InvoiceItemScalarWhereInput)
    where!: InvoiceItemScalarWhereInput;

    @Field(() => InvoiceItemUpdateManyMutationInput, {nullable:false})
    @Type(() => InvoiceItemUpdateManyMutationInput)
    data!: InvoiceItemUpdateManyMutationInput;
}
