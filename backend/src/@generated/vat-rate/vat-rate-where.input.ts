import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumVatRateTypeFilter } from '../prisma/enum-vat-rate-type-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

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

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => EnumVatRateTypeFilter, {nullable:true})
    type?: EnumVatRateTypeFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    rate?: DecimalNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    @Type(() => UserNullableScalarRelationFilter)
    user?: UserNullableScalarRelationFilter;
}
