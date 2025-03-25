import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Type } from 'class-transformer';
import { PaymentUpdateWithoutUserInput } from './payment-update-without-user.input';

@InputType()
export class PaymentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    @Type(() => PaymentWhereUniqueInput)
    where!: Prisma.AtLeast<PaymentWhereUniqueInput, 'id' | 'method'>;

    @Field(() => PaymentUpdateWithoutUserInput, {nullable:false})
    @Type(() => PaymentUpdateWithoutUserInput)
    data!: PaymentUpdateWithoutUserInput;
}
