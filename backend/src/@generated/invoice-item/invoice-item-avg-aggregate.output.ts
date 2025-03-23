import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class InvoiceItemAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    invoiceId?: number;

    @Field(() => Float, {nullable:true})
    productId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    quantity?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    unitPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    taxRate?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    discount?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalNet?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalTax?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalGross?: Decimal;
}
