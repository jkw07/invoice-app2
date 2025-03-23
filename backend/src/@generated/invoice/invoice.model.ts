import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Status } from '../prisma/status.enum';
import { Company } from '../company/company.model';
import { Client } from '../client/client.model';
import { Payment } from '../payment/payment.model';
import { InvoiceItem } from '../invoice-item/invoice-item.model';
import { Reminder } from '../reminder/reminder.model';
import { InvoiceCount } from './invoice-count.output';

@ObjectType()
export class Invoice {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => Int, {nullable:false})
    buyerId!: number;

    @Field(() => Int, {nullable:false})
    paymentId!: number;

    @Field(() => String, {nullable:true})
    recipient!: string | null;

    @Field(() => String, {nullable:false})
    invoiceType!: string;

    @Field(() => String, {nullable:false})
    invoiceNo!: string;

    @Field(() => Date, {nullable:false})
    issuedDate!: Date;

    @Field(() => Date, {nullable:true})
    transactionDate!: Date | null;

    @Field(() => Date, {nullable:false})
    dueDate!: Date;

    @Field(() => String, {nullable:false})
    paymentMethod!: string;

    @Field(() => Date, {nullable:true})
    paymentDate!: Date | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => GraphQLDecimal, {nullable:false})
    totalAmount!: Decimal;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Status, {nullable:false})
    status!: `${Status}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Company, {nullable:false})
    company?: Company;

    @Field(() => Client, {nullable:false})
    buyer?: Client;

    @Field(() => Payment, {nullable:false})
    payment?: Payment;

    @Field(() => [InvoiceItem], {nullable:true})
    invoiceItems?: Array<InvoiceItem>;

    @Field(() => [Reminder], {nullable:true})
    reminders?: Array<Reminder>;

    @Field(() => InvoiceCount, {nullable:false})
    _count?: InvoiceCount;
}
