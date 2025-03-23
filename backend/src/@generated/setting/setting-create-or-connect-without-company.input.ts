import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';
import { Type } from 'class-transformer';
import { SettingCreateWithoutCompanyInput } from './setting-create-without-company.input';

@InputType()
export class SettingCreateOrConnectWithoutCompanyInput {

    @Field(() => SettingWhereUniqueInput, {nullable:false})
    @Type(() => SettingWhereUniqueInput)
    where!: Prisma.AtLeast<SettingWhereUniqueInput, 'id'>;

    @Field(() => SettingCreateWithoutCompanyInput, {nullable:false})
    @Type(() => SettingCreateWithoutCompanyInput)
    create!: SettingCreateWithoutCompanyInput;
}
