import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { InvoiceListRelationFilter } from '../invoice/invoice-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    method?: string;

    @Field(() => [PaymentWhereInput], {nullable:true})
    AND?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    OR?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    NOT?: Array<PaymentWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => InvoiceListRelationFilter, {nullable:true})
    @Type(() => InvoiceListRelationFilter)
    invoices?: InvoiceListRelationFilter;
}
