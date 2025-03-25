import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateCreateWithoutUserInput } from './vat-rate-create-without-user.input';
import { Type } from 'class-transformer';
import { VatRateCreateOrConnectWithoutUserInput } from './vat-rate-create-or-connect-without-user.input';
import { VatRateUpsertWithWhereUniqueWithoutUserInput } from './vat-rate-upsert-with-where-unique-without-user.input';
import { VatRateCreateManyUserInputEnvelope } from './vat-rate-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VatRateWhereUniqueInput } from './vat-rate-where-unique.input';
import { VatRateUpdateWithWhereUniqueWithoutUserInput } from './vat-rate-update-with-where-unique-without-user.input';
import { VatRateUpdateManyWithWhereWithoutUserInput } from './vat-rate-update-many-with-where-without-user.input';
import { VatRateScalarWhereInput } from './vat-rate-scalar-where.input';

@InputType()
export class VatRateUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [VatRateCreateWithoutUserInput], {nullable:true})
    @Type(() => VatRateCreateWithoutUserInput)
    create?: Array<VatRateCreateWithoutUserInput>;

    @Field(() => [VatRateCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VatRateCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VatRateCreateOrConnectWithoutUserInput>;

    @Field(() => [VatRateUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VatRateUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VatRateUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => VatRateCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VatRateCreateManyUserInputEnvelope)
    createMany?: VatRateCreateManyUserInputEnvelope;

    @Field(() => [VatRateWhereUniqueInput], {nullable:true})
    @Type(() => VatRateWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>>;

    @Field(() => [VatRateWhereUniqueInput], {nullable:true})
    @Type(() => VatRateWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>>;

    @Field(() => [VatRateWhereUniqueInput], {nullable:true})
    @Type(() => VatRateWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>>;

    @Field(() => [VatRateWhereUniqueInput], {nullable:true})
    @Type(() => VatRateWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VatRateWhereUniqueInput, 'id' | 'type_rate'>>;

    @Field(() => [VatRateUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VatRateUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VatRateUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [VatRateUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VatRateUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VatRateUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [VatRateScalarWhereInput], {nullable:true})
    @Type(() => VatRateScalarWhereInput)
    deleteMany?: Array<VatRateScalarWhereInput>;
}
