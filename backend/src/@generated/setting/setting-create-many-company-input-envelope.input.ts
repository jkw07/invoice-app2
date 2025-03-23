import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingCreateManyCompanyInput } from './setting-create-many-company.input';
import { Type } from 'class-transformer';

@InputType()
export class SettingCreateManyCompanyInputEnvelope {

    @Field(() => [SettingCreateManyCompanyInput], {nullable:false})
    @Type(() => SettingCreateManyCompanyInput)
    data!: Array<SettingCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
