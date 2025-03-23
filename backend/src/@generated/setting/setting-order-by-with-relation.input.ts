import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CompanyOrderByWithRelationInput } from '../company/company-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class SettingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    defaultCurrency?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    exemptFromTax?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CompanyOrderByWithRelationInput, {nullable:true})
    @Type(() => CompanyOrderByWithRelationInput)
    company?: CompanyOrderByWithRelationInput;
}
