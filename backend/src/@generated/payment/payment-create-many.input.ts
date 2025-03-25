import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PaymentCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
