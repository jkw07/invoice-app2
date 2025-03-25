import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';
import { Type } from 'class-transformer';
import { VatRateUpdateWithoutUserInput } from './vat-rate-update-without-user.input';

@InputType()
export class VatRateUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => VatRateWhereUniqueInput, {nullable:false})
    @Type(() => VatRateWhereUniqueInput)
    where!: Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>;

    @Field(() => VatRateUpdateWithoutUserInput, {nullable:false})
    @Type(() => VatRateUpdateWithoutUserInput)
    data!: VatRateUpdateWithoutUserInput;
}
