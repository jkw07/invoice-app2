import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumVatRateTypeFilter } from '../prisma/enum-vat-rate-type-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class VatRateScalarWhereInput {

    @Field(() => [VatRateScalarWhereInput], {nullable:true})
    @Type(() => VatRateScalarWhereInput)
    AND?: Array<VatRateScalarWhereInput>;

    @Field(() => [VatRateScalarWhereInput], {nullable:true})
    @Type(() => VatRateScalarWhereInput)
    OR?: Array<VatRateScalarWhereInput>;

    @Field(() => [VatRateScalarWhereInput], {nullable:true})
    @Type(() => VatRateScalarWhereInput)
    NOT?: Array<VatRateScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => EnumVatRateTypeFilter, {nullable:true})
    type?: EnumVatRateTypeFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    rate?: DecimalNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
