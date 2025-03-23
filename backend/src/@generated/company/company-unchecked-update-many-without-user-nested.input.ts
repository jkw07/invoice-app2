import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutUserInput } from './company-create-or-connect-without-user.input';
import { CompanyUpsertWithWhereUniqueWithoutUserInput } from './company-upsert-with-where-unique-without-user.input';
import { CompanyCreateManyUserInputEnvelope } from './company-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateWithWhereUniqueWithoutUserInput } from './company-update-with-where-unique-without-user.input';
import { CompanyUpdateManyWithWhereWithoutUserInput } from './company-update-many-with-where-without-user.input';
import { CompanyScalarWhereInput } from './company-scalar-where.input';

@InputType()
export class CompanyUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [CompanyCreateWithoutUserInput], {nullable:true})
    @Type(() => CompanyCreateWithoutUserInput)
    create?: Array<CompanyCreateWithoutUserInput>;

    @Field(() => [CompanyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CompanyCreateOrConnectWithoutUserInput>;

    @Field(() => [CompanyUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CompanyUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CompanyUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CompanyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CompanyCreateManyUserInputEnvelope)
    createMany?: CompanyCreateManyUserInputEnvelope;

    @Field(() => [CompanyWhereUniqueInput], {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>>;

    @Field(() => [CompanyWhereUniqueInput], {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>>;

    @Field(() => [CompanyWhereUniqueInput], {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>>;

    @Field(() => [CompanyWhereUniqueInput], {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>>;

    @Field(() => [CompanyUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CompanyUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CompanyUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CompanyUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CompanyUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CompanyUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CompanyScalarWhereInput], {nullable:true})
    @Type(() => CompanyScalarWhereInput)
    deleteMany?: Array<CompanyScalarWhereInput>;
}
