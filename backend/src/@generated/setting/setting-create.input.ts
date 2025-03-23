import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateNestedOneWithoutSettingsInput } from '../company/company-create-nested-one-without-settings.input';
import { Type } from 'class-transformer';

@InputType()
export class SettingCreateInput {

    @Field(() => String, {nullable:false})
    defaultCurrency!: string;

    @Field(() => Boolean, {nullable:true})
    exemptFromTax?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CompanyCreateNestedOneWithoutSettingsInput, {nullable:false})
    @Type(() => CompanyCreateNestedOneWithoutSettingsInput)
    company!: CompanyCreateNestedOneWithoutSettingsInput;
}
