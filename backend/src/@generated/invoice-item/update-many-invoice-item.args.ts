import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceItemUpdateManyMutationInput } from './invoice-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { InvoiceItemWhereInput } from './invoice-item-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyInvoiceItemArgs {

    @Field(() => InvoiceItemUpdateManyMutationInput, {nullable:false})
    @Type(() => InvoiceItemUpdateManyMutationInput)
    data!: InvoiceItemUpdateManyMutationInput;

    @Field(() => InvoiceItemWhereInput, {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    where?: InvoiceItemWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
