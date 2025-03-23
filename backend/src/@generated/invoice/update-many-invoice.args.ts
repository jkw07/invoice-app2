import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceUpdateManyMutationInput } from './invoice-update-many-mutation.input';
import { Type } from 'class-transformer';
import { InvoiceWhereInput } from './invoice-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyInvoiceArgs {

    @Field(() => InvoiceUpdateManyMutationInput, {nullable:false})
    @Type(() => InvoiceUpdateManyMutationInput)
    data!: InvoiceUpdateManyMutationInput;

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    where?: InvoiceWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
