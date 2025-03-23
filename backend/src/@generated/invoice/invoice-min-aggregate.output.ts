import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Status } from '../prisma/status.enum';

@ObjectType()
export class InvoiceMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    companyId?: number;

    @Field(() => Int, {nullable:true})
    buyerId?: number;

    @Field(() => Int, {nullable:true})
    paymentId?: number;

    @Field(() => String, {nullable:true})
    recipient?: string;

    @Field(() => String, {nullable:true})
    invoiceType?: string;

    @Field(() => String, {nullable:true})
    invoiceNo?: string;

    @Field(() => Date, {nullable:true})
    issuedDate?: Date | string;

    @Field(() => Date, {nullable:true})
    transactionDate?: Date | string;

    @Field(() => Date, {nullable:true})
    dueDate?: Date | string;

    @Field(() => String, {nullable:true})
    paymentMethod?: string;

    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    totalAmount?: Decimal;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => Status, {nullable:true})
    status?: `${Status}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
