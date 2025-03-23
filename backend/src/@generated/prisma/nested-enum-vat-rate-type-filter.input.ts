import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateType } from './vat-rate-type.enum';

@InputType()
export class NestedEnumVatRateTypeFilter {

    @Field(() => VatRateType, {nullable:true})
    equals?: `${VatRateType}`;

    @Field(() => [VatRateType], {nullable:true})
    in?: Array<`${VatRateType}`>;

    @Field(() => [VatRateType], {nullable:true})
    notIn?: Array<`${VatRateType}`>;

    @Field(() => NestedEnumVatRateTypeFilter, {nullable:true})
    not?: NestedEnumVatRateTypeFilter;
}
