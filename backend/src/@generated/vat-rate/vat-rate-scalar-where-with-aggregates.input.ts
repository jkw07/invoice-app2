import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumVatRateTypeWithAggregatesFilter } from '../prisma/enum-vat-rate-type-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class VatRateScalarWhereWithAggregatesInput {

    @Field(() => [VatRateScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => VatRateScalarWhereWithAggregatesInput)
    AND?: Array<VatRateScalarWhereWithAggregatesInput>;

    @Field(() => [VatRateScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => VatRateScalarWhereWithAggregatesInput)
    OR?: Array<VatRateScalarWhereWithAggregatesInput>;

    @Field(() => [VatRateScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => VatRateScalarWhereWithAggregatesInput)
    NOT?: Array<VatRateScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumVatRateTypeWithAggregatesFilter, {nullable:true})
    type?: EnumVatRateTypeWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    rate?: DecimalNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
