import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InvoiceSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buyerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalAmount?: `${SortOrder}`;
}
