import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { InvoiceListRelationFilter } from '../invoice/invoice-list-relation-filter.input';

@InputType()
export class PaymentWhereInput {

    @Field(() => [PaymentWhereInput], {nullable:true})
    AND?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    OR?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    NOT?: Array<PaymentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    method?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    @Type(() => UserNullableScalarRelationFilter)
    user?: UserNullableScalarRelationFilter;

    @Field(() => InvoiceListRelationFilter, {nullable:true})
    @Type(() => InvoiceListRelationFilter)
    invoices?: InvoiceListRelationFilter;
}
