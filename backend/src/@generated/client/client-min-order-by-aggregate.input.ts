import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ClientMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tin?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    bin?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    street?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buildingNo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    apartmentNo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    zipCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    country?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    province?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    county?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    municipality?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}
