import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CompanyScalarRelationFilter } from '../company/company-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { InvoiceListRelationFilter } from '../invoice/invoice-list-relation-filter.input';

@InputType()
export class ClientWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ClientWhereInput], {nullable:true})
    AND?: Array<ClientWhereInput>;

    @Field(() => [ClientWhereInput], {nullable:true})
    OR?: Array<ClientWhereInput>;

    @Field(() => [ClientWhereInput], {nullable:true})
    NOT?: Array<ClientWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    companyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tin?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bin?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    street?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    buildingNo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apartmentNo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    zipCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    city?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    province?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    county?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    municipality?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CompanyScalarRelationFilter, {nullable:true})
    @Type(() => CompanyScalarRelationFilter)
    company?: CompanyScalarRelationFilter;

    @Field(() => InvoiceListRelationFilter, {nullable:true})
    @Type(() => InvoiceListRelationFilter)
    invoices?: InvoiceListRelationFilter;
}
