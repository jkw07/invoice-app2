import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateCreateWithoutUserInput } from './vat-rate-create-without-user.input';
import { Type } from 'class-transformer';
import { VatRateCreateOrConnectWithoutUserInput } from './vat-rate-create-or-connect-without-user.input';
import { VatRateCreateManyUserInputEnvelope } from './vat-rate-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';

@InputType()
export class VatRateUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [VatRateCreateWithoutUserInput], {nullable:true})
    @Type(() => VatRateCreateWithoutUserInput)
    create?: Array<VatRateCreateWithoutUserInput>;

    @Field(() => [VatRateCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VatRateCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VatRateCreateOrConnectWithoutUserInput>;

    @Field(() => VatRateCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VatRateCreateManyUserInputEnvelope)
    createMany?: VatRateCreateManyUserInputEnvelope;

    @Field(() => [VatRateWhereUniqueInput], {nullable:true})
    @Type(() => VatRateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>>;
}
