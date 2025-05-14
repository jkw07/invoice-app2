import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumVatRateTypeFilter } from '../prisma/enum-vat-rate-type-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';

@InputType()
export class InvoiceItemScalarWhereInput {

    @Field(() => [InvoiceItemScalarWhereInput], {nullable:true})
    @Type(() => InvoiceItemScalarWhereInput)
    AND?: Array<InvoiceItemScalarWhereInput>;

    @Field(() => [InvoiceItemScalarWhereInput], {nullable:true})
    @Type(() => InvoiceItemScalarWhereInput)
    OR?: Array<InvoiceItemScalarWhereInput>;

    @Field(() => [InvoiceItemScalarWhereInput], {nullable:true})
    @Type(() => InvoiceItemScalarWhereInput)
    NOT?: Array<InvoiceItemScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    invoiceId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    productId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

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
}
