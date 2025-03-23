import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceWhereInput } from './invoice-where.input';
import { Type } from 'class-transformer';

@InputType()
export class InvoiceListRelationFilter {

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    every?: InvoiceWhereInput;

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    some?: InvoiceWhereInput;

    @Field(() => InvoiceWhereInput, {nullable:true})
    @Type(() => InvoiceWhereInput)
    none?: InvoiceWhereInput;
}
