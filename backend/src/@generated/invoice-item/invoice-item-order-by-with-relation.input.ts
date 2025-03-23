import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { InvoiceOrderByWithRelationInput } from '../invoice/invoice-order-by-with-relation.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';

@InputType()
export class InvoiceItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    invoiceId?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    productId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    unit?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    quantity?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    unitPrice?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    taxType?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    taxRate?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    discount?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    totalNet?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    totalTax?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    totalGross?: `${SortOrder}`;

    @Field(() => InvoiceOrderByWithRelationInput, {nullable:true})
    @Type(() => InvoiceOrderByWithRelationInput)
    invoice?: InvoiceOrderByWithRelationInput;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    @Type(() => ProductOrderByWithRelationInput)
    product?: ProductOrderByWithRelationInput;
}
