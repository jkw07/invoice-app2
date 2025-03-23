import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { SettingListRelationFilter } from '../setting/setting-list-relation-filter.input';
import { InvoiceListRelationFilter } from '../invoice/invoice-list-relation-filter.input';
import { Type } from 'class-transformer';
import { ClientListRelationFilter } from '../client/client-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { ReminderListRelationFilter } from '../reminder/reminder-list-relation-filter.input';

@InputType()
export class CompanyWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [CompanyWhereInput], {nullable:true})
    AND?: Array<CompanyWhereInput>;

    @Field(() => [CompanyWhereInput], {nullable:true})
    OR?: Array<CompanyWhereInput>;

    @Field(() => [CompanyWhereInput], {nullable:true})
    NOT?: Array<CompanyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fullName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shortName?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    tin?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bin?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    street?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    buildingNo?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apartmentNo?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    zipCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    province?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    county?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    municipality?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => SettingListRelationFilter, {nullable:true})
    settings?: SettingListRelationFilter;

    @Field(() => InvoiceListRelationFilter, {nullable:true})
    @Type(() => InvoiceListRelationFilter)
    invoices?: InvoiceListRelationFilter;

    @Field(() => ClientListRelationFilter, {nullable:true})
    @Type(() => ClientListRelationFilter)
    clients?: ClientListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    @Type(() => ProductListRelationFilter)
    products?: ProductListRelationFilter;

    @Field(() => ReminderListRelationFilter, {nullable:true})
    @Type(() => ReminderListRelationFilter)
    reminders?: ReminderListRelationFilter;
}
