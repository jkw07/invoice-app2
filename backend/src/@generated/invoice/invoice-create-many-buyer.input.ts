import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Status } from '../prisma/status.enum';

@InputType()
export class InvoiceCreateManyBuyerInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => Int, {nullable:false})
    paymentId!: number;

    @Field(() => String, {nullable:true})
    recipient?: string;

    @Field(() => String, {nullable:false})
    invoiceType!: string;

    @Field(() => String, {nullable:false})
    invoiceNo!: string;

    @Field(() => Date, {nullable:false})
    issuedDate!: Date | string;

    @Field(() => Date, {nullable:true})
    transactionDate?: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => String, {nullable:false})
    paymentMethod!: string;

    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    totalAmount!: Decimal;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Status, {nullable:false})
    status!: `${Status}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
