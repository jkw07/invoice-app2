import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { Type } from 'class-transformer';
import { CompanyUpdateWithoutSettingsInput } from './company-update-without-settings.input';

@InputType()
export class CompanyUpdateToOneWithWhereWithoutSettingsInput {

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;

    @Field(() => CompanyUpdateWithoutSettingsInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutSettingsInput)
    data!: CompanyUpdateWithoutSettingsInput;
}
