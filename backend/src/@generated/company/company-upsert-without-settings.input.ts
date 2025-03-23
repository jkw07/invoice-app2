import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutSettingsInput } from './company-update-without-settings.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutSettingsInput } from './company-create-without-settings.input';
import { CompanyWhereInput } from './company-where.input';

@InputType()
export class CompanyUpsertWithoutSettingsInput {

    @Field(() => CompanyUpdateWithoutSettingsInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutSettingsInput)
    update!: CompanyUpdateWithoutSettingsInput;

    @Field(() => CompanyCreateWithoutSettingsInput, {nullable:false})
    @Type(() => CompanyCreateWithoutSettingsInput)
    create!: CompanyCreateWithoutSettingsInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;
}
