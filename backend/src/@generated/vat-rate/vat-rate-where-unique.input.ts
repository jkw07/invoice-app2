import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VatRateTypeRateCompoundUniqueInput } from './vat-rate-type-rate-compound-unique.input';
import { Type } from 'class-transformer';
import { VatRateWhereInput } from './vat-rate-where.input';
import { EnumVatRateTypeFilter } from '../prisma/enum-vat-rate-type-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class VatRateWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => VatRateTypeRateCompoundUniqueInput, {nullable:true})
    @Type(() => VatRateTypeRateCompoundUniqueInput)
    type_rate?: VatRateTypeRateCompoundUniqueInput;

    @Field(() => [VatRateWhereInput], {nullable:true})
    @Type(() => VatRateWhereInput)
    AND?: Array<VatRateWhereInput>;

    @Field(() => [VatRateWhereInput], {nullable:true})
    @Type(() => VatRateWhereInput)
    OR?: Array<VatRateWhereInput>;

    @Field(() => [VatRateWhereInput], {nullable:true})
    @Type(() => VatRateWhereInput)
    NOT?: Array<VatRateWhereInput>;

    @Field(() => EnumVatRateTypeFilter, {nullable:true})
    type?: EnumVatRateTypeFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    rate?: DecimalNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
