import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InvoiceItemWhereInput } from './invoice-item-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyInvoiceItemArgs {

    @Field(() => InvoiceItemWhereInput, {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    where?: InvoiceItemWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
