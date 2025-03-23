import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';
import { Type } from 'class-transformer';
import { SettingUpdateWithoutCompanyInput } from './setting-update-without-company.input';
import { SettingCreateWithoutCompanyInput } from './setting-create-without-company.input';

@InputType()
export class SettingUpsertWithWhereUniqueWithoutCompanyInput {

    @Field(() => SettingWhereUniqueInput, {nullable:false})
    @Type(() => SettingWhereUniqueInput)
    where!: Prisma.AtLeast<SettingWhereUniqueInput, 'id'>;

    @Field(() => SettingUpdateWithoutCompanyInput, {nullable:false})
    @Type(() => SettingUpdateWithoutCompanyInput)
    update!: SettingUpdateWithoutCompanyInput;

    @Field(() => SettingCreateWithoutCompanyInput, {nullable:false})
    @Type(() => SettingCreateWithoutCompanyInput)
    create!: SettingCreateWithoutCompanyInput;
}
