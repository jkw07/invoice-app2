import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InvoiceWhereInput } from './invoice-where.input';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumStatusFilter } from '../prisma/enum-status-filter.input';
import { CompanyScalarRelationFilter } from '../company/company-scalar-relation-filter.input';
import { ClientScalarRelationFilter } from '../client/client-scalar-relation-filter.input';
import { PaymentScalarRelationFilter } from '../payment/payment-scalar-relation-filter.input';
import { InvoiceItemListRelationFilter } from '../invoice-item/invoice-item-list-relation-filter.input';
import { ReminderListRelationFilter } from '../reminder/reminder-list-relation-filter.input';

@InputType()
export class InvoiceWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [InvoiceWhereInput], {nullable:true})
    @Type(() => InvoiceWhereInput)
    AND?: Array<InvoiceWhereInput>;

    @Field(() => [InvoiceWhereInput], {nullable:true})
    @Type(() => InvoiceWhereInput)
    OR?: Array<InvoiceWhereInput>;

    @Field(() => [InvoiceWhereInput], {nullable:true})
    @Type(() => InvoiceWhereInput)
    NOT?: Array<InvoiceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    companyId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    buyerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    paymentId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    recipient?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    invoiceType?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    invoiceNo?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    issuedDate?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    transactionDate?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dueDate?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentMethod?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    paymentDate?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    totalAmount?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => EnumStatusFilter, {nullable:true})
    status?: EnumStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CompanyScalarRelationFilter, {nullable:true})
    @Type(() => CompanyScalarRelationFilter)
    company?: CompanyScalarRelationFilter;

    @Field(() => ClientScalarRelationFilter, {nullable:true})
    @Type(() => ClientScalarRelationFilter)
    buyer?: ClientScalarRelationFilter;

    @Field(() => PaymentScalarRelationFilter, {nullable:true})
    @Type(() => PaymentScalarRelationFilter)
    payment?: PaymentScalarRelationFilter;

    @Field(() => InvoiceItemListRelationFilter, {nullable:true})
    @Type(() => InvoiceItemListRelationFilter)
    invoiceItems?: InvoiceItemListRelationFilter;

    @Field(() => ReminderListRelationFilter, {nullable:true})
    @Type(() => ReminderListRelationFilter)
    reminders?: ReminderListRelationFilter;
}
