import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ReminderCountOrderByAggregateInput } from './reminder-count-order-by-aggregate.input';
import { ReminderAvgOrderByAggregateInput } from './reminder-avg-order-by-aggregate.input';
import { ReminderMaxOrderByAggregateInput } from './reminder-max-order-by-aggregate.input';
import { ReminderMinOrderByAggregateInput } from './reminder-min-order-by-aggregate.input';
import { ReminderSumOrderByAggregateInput } from './reminder-sum-order-by-aggregate.input';

@InputType()
export class ReminderOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    invoiceId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    reminderType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reminderDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    completed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    message?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ReminderCountOrderByAggregateInput, {nullable:true})
    _count?: ReminderCountOrderByAggregateInput;

    @Field(() => ReminderAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReminderAvgOrderByAggregateInput;

    @Field(() => ReminderMaxOrderByAggregateInput, {nullable:true})
    _max?: ReminderMaxOrderByAggregateInput;

    @Field(() => ReminderMinOrderByAggregateInput, {nullable:true})
    _min?: ReminderMinOrderByAggregateInput;

    @Field(() => ReminderSumOrderByAggregateInput, {nullable:true})
    _sum?: ReminderSumOrderByAggregateInput;
}
