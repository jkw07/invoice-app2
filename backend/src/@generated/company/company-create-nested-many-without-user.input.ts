import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutUserInput } from './company-create-or-connect-without-user.input';
import { CompanyCreateManyUserInputEnvelope } from './company-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedManyWithoutUserInput {

    @Field(() => [CompanyCreateWithoutUserInput], {nullable:true})
    @Type(() => CompanyCreateWithoutUserInput)
    create?: Array<CompanyCreateWithoutUserInput>;

    @Field(() => [CompanyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CompanyCreateOrConnectWithoutUserInput>;

    @Field(() => CompanyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CompanyCreateManyUserInputEnvelope)
    createMany?: CompanyCreateManyUserInputEnvelope;

    @Field(() => [CompanyWhereUniqueInput], {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>>;
}
