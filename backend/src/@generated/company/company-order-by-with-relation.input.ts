import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { SettingOrderByRelationAggregateInput } from '../setting/setting-order-by-relation-aggregate.input';
import { InvoiceOrderByRelationAggregateInput } from '../invoice/invoice-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { ClientOrderByRelationAggregateInput } from '../client/client-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { ReminderOrderByRelationAggregateInput } from '../reminder/reminder-order-by-relation-aggregate.input';

@InputType()
export class CompanyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    fullName?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    shortName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    tin?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    bin?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    street?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buildingNo?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    apartmentNo?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    zipCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    city?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    province?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    county?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    municipality?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SettingOrderByRelationAggregateInput, {nullable:true})
    settings?: SettingOrderByRelationAggregateInput;

    @Field(() => InvoiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => InvoiceOrderByRelationAggregateInput)
    invoices?: InvoiceOrderByRelationAggregateInput;

    @Field(() => ClientOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ClientOrderByRelationAggregateInput)
    clients?: ClientOrderByRelationAggregateInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProductOrderByRelationAggregateInput)
    products?: ProductOrderByRelationAggregateInput;

    @Field(() => ReminderOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReminderOrderByRelationAggregateInput)
    reminders?: ReminderOrderByRelationAggregateInput;
}
