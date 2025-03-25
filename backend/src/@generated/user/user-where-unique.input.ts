import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CompanyListRelationFilter } from '../company/company-list-relation-filter.input';
import { Type } from 'class-transformer';
import { VatRateListRelationFilter } from '../vat-rate/vat-rate-list-relation-filter.input';
import { PaymentListRelationFilter } from '../payment/payment-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    password_hash?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CompanyListRelationFilter, {nullable:true})
    @Type(() => CompanyListRelationFilter)
    companies?: CompanyListRelationFilter;

    @Field(() => VatRateListRelationFilter, {nullable:true})
    @Type(() => VatRateListRelationFilter)
    vatRates?: VatRateListRelationFilter;

    @Field(() => PaymentListRelationFilter, {nullable:true})
    @Type(() => PaymentListRelationFilter)
    payments?: PaymentListRelationFilter;
}
