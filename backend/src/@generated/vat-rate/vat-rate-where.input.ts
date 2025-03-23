import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumVatRateTypeFilter } from '../prisma/enum-vat-rate-type-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class VatRateWhereInput {

    @Field(() => [VatRateWhereInput], {nullable:true})
    @Type(() => VatRateWhereInput)
    AND?: Array<VatRateWhereInput>;

    @Field(() => [VatRateWhereInput], {nullable:true})
    @Type(() => VatRateWhereInput)
    OR?: Array<VatRateWhereInput>;

    @Field(() => [VatRateWhereInput], {nullable:true})
    @Type(() => VatRateWhereInput)
    NOT?: Array<VatRateWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => EnumVatRateTypeFilter, {nullable:true})
    type?: EnumVatRateTypeFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    rate?: DecimalNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
