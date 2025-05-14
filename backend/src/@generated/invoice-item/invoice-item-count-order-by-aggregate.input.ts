import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class InvoiceItemCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    invoiceId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unit?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unitPrice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    taxType?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    taxRate?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    discount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalNet?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalTax?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    totalGross?: `${SortOrder}`;
}
