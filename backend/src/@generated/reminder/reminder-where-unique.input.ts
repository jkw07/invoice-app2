import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReminderWhereInput } from './reminder-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { CompanyScalarRelationFilter } from '../company/company-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { InvoiceNullableScalarRelationFilter } from '../invoice/invoice-nullable-scalar-relation-filter.input';

@InputType()
export class ReminderWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ReminderWhereInput], {nullable:true})
    AND?: Array<ReminderWhereInput>;

    @Field(() => [ReminderWhereInput], {nullable:true})
    OR?: Array<ReminderWhereInput>;

    @Field(() => [ReminderWhereInput], {nullable:true})
    NOT?: Array<ReminderWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    companyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    invoiceId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    reminderType?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    reminderDate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    completed?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CompanyScalarRelationFilter, {nullable:true})
    @Type(() => CompanyScalarRelationFilter)
    company?: CompanyScalarRelationFilter;

    @Field(() => InvoiceNullableScalarRelationFilter, {nullable:true})
    @Type(() => InvoiceNullableScalarRelationFilter)
    invoice?: InvoiceNullableScalarRelationFilter;
}
