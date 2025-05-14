import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumVatRateTypeWithAggregatesFilter } from '../prisma/enum-vat-rate-type-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';

@InputType()
export class InvoiceItemScalarWhereWithAggregatesInput {

    @Field(() => [InvoiceItemScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => InvoiceItemScalarWhereWithAggregatesInput)
    AND?: Array<InvoiceItemScalarWhereWithAggregatesInput>;

    @Field(() => [InvoiceItemScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => InvoiceItemScalarWhereWithAggregatesInput)
    OR?: Array<InvoiceItemScalarWhereWithAggregatesInput>;

    @Field(() => [InvoiceItemScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => InvoiceItemScalarWhereWithAggregatesInput)
    NOT?: Array<InvoiceItemScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    invoiceId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    productId?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    unit?: StringNullableWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    quantity?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    unitPrice?: DecimalWithAggregatesFilter;

    @Field(() => EnumVatRateTypeWithAggregatesFilter, {nullable:true})
    taxType?: EnumVatRateTypeWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    taxRate?: DecimalNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    discount?: DecimalNullableWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    totalNet?: DecimalWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    totalTax?: DecimalNullableWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    totalGross?: DecimalWithAggregatesFilter;
}
