import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Company } from '../company/company.model';
import { VatRate } from '../vat-rate/vat-rate.model';
import { Payment } from '../payment/payment.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password_hash!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Company], {nullable:true})
    companies?: Array<Company>;

    @Field(() => [VatRate], {nullable:true})
    vatRates?: Array<VatRate>;

    @Field(() => [Payment], {nullable:true})
    payments?: Array<Payment>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
