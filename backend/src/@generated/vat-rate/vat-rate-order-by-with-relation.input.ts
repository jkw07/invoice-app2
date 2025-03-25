import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class VatRateOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    rate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;
}
