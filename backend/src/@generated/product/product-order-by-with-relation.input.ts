import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { CompanyOrderByWithRelationInput } from '../company/company-order-by-with-relation.input';
import { InvoiceItemOrderByRelationAggregateInput } from '../invoice-item/invoice-item-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    unit?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    taxType?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    taxRate?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CompanyOrderByWithRelationInput, {nullable:true})
    @Type(() => CompanyOrderByWithRelationInput)
    company?: CompanyOrderByWithRelationInput;

    @Field(() => InvoiceItemOrderByRelationAggregateInput, {nullable:true})
    @Type(() => InvoiceItemOrderByRelationAggregateInput)
    invoiceItems?: InvoiceItemOrderByRelationAggregateInput;
}
