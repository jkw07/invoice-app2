import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InvoiceItemCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    invoiceId!: number;

    @Field(() => Int, {nullable:false})
    productId!: number;

    @Field(() => Int, {nullable:false})
    unit!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:false})
    unitPrice!: number;

    @Field(() => Int, {nullable:false})
    taxType!: number;

    @Field(() => Int, {nullable:false})
    taxRate!: number;

    @Field(() => Int, {nullable:false})
    discount!: number;

    @Field(() => Int, {nullable:false})
    totalNet!: number;

    @Field(() => Int, {nullable:false})
    totalTax!: number;

    @Field(() => Int, {nullable:false})
    totalGross!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
