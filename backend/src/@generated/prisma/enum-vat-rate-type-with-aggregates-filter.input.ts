import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateType } from './vat-rate-type.enum';
import { NestedEnumVatRateTypeWithAggregatesFilter } from './nested-enum-vat-rate-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumVatRateTypeFilter } from './nested-enum-vat-rate-type-filter.input';

@InputType()
export class EnumVatRateTypeWithAggregatesFilter {

    @Field(() => VatRateType, {nullable:true})
    equals?: `${VatRateType}`;

    @Field(() => [VatRateType], {nullable:true})
    in?: Array<`${VatRateType}`>;

    @Field(() => [VatRateType], {nullable:true})
    notIn?: Array<`${VatRateType}`>;

    @Field(() => NestedEnumVatRateTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumVatRateTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumVatRateTypeFilter, {nullable:true})
    _min?: NestedEnumVatRateTypeFilter;

    @Field(() => NestedEnumVatRateTypeFilter, {nullable:true})
    _max?: NestedEnumVatRateTypeFilter;
}
