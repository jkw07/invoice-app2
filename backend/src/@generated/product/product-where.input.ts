import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumVatRateTypeFilter } from '../prisma/enum-vat-rate-type-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CompanyScalarRelationFilter } from '../company/company-scalar-relation-filter.input';
import { InvoiceItemListRelationFilter } from '../invoice-item/invoice-item-list-relation-filter.input';

@InputType()
export class ProductWhereInput {

    @Field(() => [ProductWhereInput], {nullable:true})
    @Type(() => ProductWhereInput)
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    @Type(() => ProductWhereInput)
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    @Type(() => ProductWhereInput)
    NOT?: Array<ProductWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    companyId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    unit?: StringNullableFilter;

    @Field(() => EnumVatRateTypeFilter, {nullable:true})
    taxType?: EnumVatRateTypeFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    taxRate?: DecimalNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CompanyScalarRelationFilter, {nullable:true})
    @Type(() => CompanyScalarRelationFilter)
    company?: CompanyScalarRelationFilter;

    @Field(() => InvoiceItemListRelationFilter, {nullable:true})
    @Type(() => InvoiceItemListRelationFilter)
    invoiceItems?: InvoiceItemListRelationFilter;
}
