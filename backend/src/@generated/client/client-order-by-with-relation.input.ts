import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyOrderByWithRelationInput } from '../company/company-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { InvoiceOrderByRelationAggregateInput } from '../invoice/invoice-order-by-relation-aggregate.input';

@InputType()
export class ClientOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    companyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    tin?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bin?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    street?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    buildingNo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    apartmentNo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    zipCode?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    city?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    province?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    county?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    municipality?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    email?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CompanyOrderByWithRelationInput, {nullable:true})
    @Type(() => CompanyOrderByWithRelationInput)
    company?: CompanyOrderByWithRelationInput;

    @Field(() => InvoiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => InvoiceOrderByRelationAggregateInput)
    invoices?: InvoiceOrderByRelationAggregateInput;
}
