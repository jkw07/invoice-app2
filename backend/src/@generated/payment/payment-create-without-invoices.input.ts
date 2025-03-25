import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPaymentsInput } from '../user/user-create-nested-one-without-payments.input';
import { Type } from 'class-transformer';

@InputType()
export class PaymentCreateWithoutInvoicesInput {

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPaymentsInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutPaymentsInput)
    user?: UserCreateNestedOneWithoutPaymentsInput;
}
