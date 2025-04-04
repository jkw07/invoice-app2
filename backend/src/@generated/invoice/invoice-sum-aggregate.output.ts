import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class InvoiceSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    companyId?: number;

    @Field(() => Int, {nullable:true})
    buyerId?: number;

    @Field(() => Int, {nullable:true})
    paymentId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalAmount?: Decimal;
}
