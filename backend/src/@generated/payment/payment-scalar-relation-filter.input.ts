import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';

@InputType()
export class PaymentScalarRelationFilter {

    @Field(() => PaymentWhereInput, {nullable:true})
    is?: PaymentWhereInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    isNot?: PaymentWhereInput;
}
