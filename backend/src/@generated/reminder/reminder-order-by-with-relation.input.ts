import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyOrderByWithRelationInput } from '../company/company-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { InvoiceOrderByWithRelationInput } from '../invoice/invoice-order-by-with-relation.input';

@InputType()
export class ReminderOrderByWithRelationInput {

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

    @Field(() => CompanyOrderByWithRelationInput, {nullable:true})
    @Type(() => CompanyOrderByWithRelationInput)
    company?: CompanyOrderByWithRelationInput;

    @Field(() => InvoiceOrderByWithRelationInput, {nullable:true})
    @Type(() => InvoiceOrderByWithRelationInput)
    invoice?: InvoiceOrderByWithRelationInput;
}
