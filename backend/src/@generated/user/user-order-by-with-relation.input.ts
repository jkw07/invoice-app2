import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CompanyOrderByRelationAggregateInput } from '../company/company-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { VatRateOrderByRelationAggregateInput } from '../vat-rate/vat-rate-order-by-relation-aggregate.input';
import { PaymentOrderByRelationAggregateInput } from '../payment/payment-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password_hash?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CompanyOrderByRelationAggregateInput, {nullable:true})
    @Type(() => CompanyOrderByRelationAggregateInput)
    companies?: CompanyOrderByRelationAggregateInput;

    @Field(() => VatRateOrderByRelationAggregateInput, {nullable:true})
    @Type(() => VatRateOrderByRelationAggregateInput)
    vatRates?: VatRateOrderByRelationAggregateInput;

    @Field(() => PaymentOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PaymentOrderByRelationAggregateInput)
    payments?: PaymentOrderByRelationAggregateInput;
}
