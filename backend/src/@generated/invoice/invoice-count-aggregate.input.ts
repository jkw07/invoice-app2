import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InvoiceCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    companyId?: true;

    @Field(() => Boolean, {nullable:true})
    buyerId?: true;

    @Field(() => Boolean, {nullable:true})
    paymentId?: true;

    @Field(() => Boolean, {nullable:true})
    recipient?: true;

    @Field(() => Boolean, {nullable:true})
    invoiceType?: true;

    @Field(() => Boolean, {nullable:true})
    invoiceNo?: true;

    @Field(() => Boolean, {nullable:true})
    issuedDate?: true;

    @Field(() => Boolean, {nullable:true})
    transactionDate?: true;

    @Field(() => Boolean, {nullable:true})
    dueDate?: true;

    @Field(() => Boolean, {nullable:true})
    paymentMethod?: true;

    @Field(() => Boolean, {nullable:true})
    paymentDate?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    totalAmount?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
