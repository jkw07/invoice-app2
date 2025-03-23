import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Status } from './status.enum';
import { NestedEnumStatusFilter } from './nested-enum-status-filter.input';

@InputType()
export class EnumStatusFilter {

    @Field(() => Status, {nullable:true})
    equals?: `${Status}`;

    @Field(() => [Status], {nullable:true})
    in?: Array<`${Status}`>;

    @Field(() => [Status], {nullable:true})
    notIn?: Array<`${Status}`>;

    @Field(() => NestedEnumStatusFilter, {nullable:true})
    not?: NestedEnumStatusFilter;
}
