import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InvoiceAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    companyId?: true;

    @Field(() => Boolean, {nullable:true})
    buyerId?: true;

    @Field(() => Boolean, {nullable:true})
    paymentId?: true;

    @Field(() => Boolean, {nullable:true})
    totalAmount?: true;
}
