import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutSettingsInput } from './company-create-without-settings.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutSettingsInput } from './company-create-or-connect-without-settings.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutSettingsInput {

    @Field(() => CompanyCreateWithoutSettingsInput, {nullable:true})
    @Type(() => CompanyCreateWithoutSettingsInput)
    create?: CompanyCreateWithoutSettingsInput;

    @Field(() => CompanyCreateOrConnectWithoutSettingsInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutSettingsInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutSettingsInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
