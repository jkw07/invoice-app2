import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceItemWhereInput } from './invoice-item-where.input';
import { Type } from 'class-transformer';

@InputType()
export class InvoiceItemListRelationFilter {

    @Field(() => InvoiceItemWhereInput, {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    every?: InvoiceItemWhereInput;

    @Field(() => InvoiceItemWhereInput, {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    some?: InvoiceItemWhereInput;

    @Field(() => InvoiceItemWhereInput, {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    none?: InvoiceItemWhereInput;
}
