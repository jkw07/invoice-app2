import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutSettingsInput } from './company-create-without-settings.input';

@InputType()
export class CompanyCreateOrConnectWithoutSettingsInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyCreateWithoutSettingsInput, {nullable:false})
    @Type(() => CompanyCreateWithoutSettingsInput)
    create!: CompanyCreateWithoutSettingsInput;
}
