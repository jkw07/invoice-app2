import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InvoiceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => Int, {nullable:false})
    buyerId!: number;

    @Field(() => Int, {nullable:false})
    paymentId!: number;

    @Field(() => Int, {nullable:false})
    recipient!: number;

    @Field(() => Int, {nullable:false})
    invoiceType!: number;

    @Field(() => Int, {nullable:false})
    invoiceNo!: number;

    @Field(() => Int, {nullable:false})
    issuedDate!: number;

    @Field(() => Int, {nullable:false})
    transactionDate!: number;

    @Field(() => Int, {nullable:false})
    dueDate!: number;

    @Field(() => Int, {nullable:false})
    paymentMethod!: number;

    @Field(() => Int, {nullable:false})
    paymentDate!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    totalAmount!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
