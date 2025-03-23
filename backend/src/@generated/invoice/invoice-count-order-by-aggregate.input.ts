import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InvoiceCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    buyerId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    recipient?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    invoiceType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    invoiceNo?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    issuedDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    transactionDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    dueDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentMethod?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    paymentDate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

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
}
