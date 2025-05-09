import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Invoice } from '../invoice/invoice.model';
import { PaymentCount } from './payment-count.output';

@ObjectType()
export class Payment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [Invoice], {nullable:true})
    invoices?: Array<Invoice>;

    @Field(() => PaymentCount, {nullable:false})
    _count?: PaymentCount;
}
