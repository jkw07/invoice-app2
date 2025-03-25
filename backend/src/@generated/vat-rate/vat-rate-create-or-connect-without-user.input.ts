import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';
import { Type } from 'class-transformer';
import { VatRateCreateWithoutUserInput } from './vat-rate-create-without-user.input';

@InputType()
export class VatRateCreateOrConnectWithoutUserInput {

    @Field(() => VatRateWhereUniqueInput, {nullable:false})
    @Type(() => VatRateWhereUniqueInput)
    where!: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;

    @Field(() => VatRateCreateWithoutUserInput, {nullable:false})
    @Type(() => VatRateCreateWithoutUserInput)
    create!: VatRateCreateWithoutUserInput;
}
