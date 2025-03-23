import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumVatRateTypeFilter } from '../prisma/enum-vat-rate-type-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { InvoiceScalarRelationFilter } from '../invoice/invoice-scalar-relation-filter.input';
import { ProductNullableScalarRelationFilter } from '../product/product-nullable-scalar-relation-filter.input';

@InputType()
export class InvoiceItemWhereInput {

    @Field(() => [InvoiceItemWhereInput], {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    AND?: Array<InvoiceItemWhereInput>;

    @Field(() => [InvoiceItemWhereInput], {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    OR?: Array<InvoiceItemWhereInput>;

    @Field(() => [InvoiceItemWhereInput], {nullable:true})
    @Type(() => InvoiceItemWhereInput)
    NOT?: Array<InvoiceItemWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    invoiceId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    productId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    unit?: StringNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    quantity?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    unitPrice?: DecimalFilter;

    @Field(() => EnumVatRateTypeFilter, {nullable:true})
    taxType?: EnumVatRateTypeFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    taxRate?: DecimalNullableFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    discount?: DecimalNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    totalNet?: DecimalFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    totalTax?: DecimalNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    totalGross?: DecimalFilter;

    @Field(() => InvoiceScalarRelationFilter, {nullable:true})
    @Type(() => InvoiceScalarRelationFilter)
    invoice?: InvoiceScalarRelationFilter;

    @Field(() => ProductNullableScalarRelationFilter, {nullable:true})
    @Type(() => ProductNullableScalarRelationFilter)
    product?: ProductNullableScalarRelationFilter;
}
