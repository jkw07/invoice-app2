import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyOrderByWithRelationInput } from '../company/company-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ClientOrderByWithRelationInput } from '../client/client-order-by-with-relation.input';
import { PaymentOrderByWithRelationInput } from '../payment/payment-order-by-with-relation.input';
import { InvoiceItemOrderByRelationAggregateInput } from '../invoice-item/invoice-item-order-by-relation-aggregate.input';
import { ReminderOrderByRelationAggregateInput } from '../reminder/reminder-order-by-relation-aggregate.input';

@InputType()
export class InvoiceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buyerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    recipient?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    invoiceType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    invoiceNo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    issuedDate?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    transactionDate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentMethod?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    paymentDate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    totalAmount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    currency?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CompanyOrderByWithRelationInput, {nullable:true})
    @Type(() => CompanyOrderByWithRelationInput)
    company?: CompanyOrderByWithRelationInput;

    @Field(() => ClientOrderByWithRelationInput, {nullable:true})
    @Type(() => ClientOrderByWithRelationInput)
    buyer?: ClientOrderByWithRelationInput;

    @Field(() => PaymentOrderByWithRelationInput, {nullable:true})
    @Type(() => PaymentOrderByWithRelationInput)
    payment?: PaymentOrderByWithRelationInput;

    @Field(() => InvoiceItemOrderByRelationAggregateInput, {nullable:true})
    @Type(() => InvoiceItemOrderByRelationAggregateInput)
    invoiceItems?: InvoiceItemOrderByRelationAggregateInput;

    @Field(() => ReminderOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ReminderOrderByRelationAggregateInput)
    reminders?: ReminderOrderByRelationAggregateInput;
}
