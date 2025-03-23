import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingCreateWithoutCompanyInput } from './setting-create-without-company.input';
import { Type } from 'class-transformer';
import { SettingCreateOrConnectWithoutCompanyInput } from './setting-create-or-connect-without-company.input';
import { SettingCreateManyCompanyInputEnvelope } from './setting-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';

@InputType()
export class SettingCreateNestedManyWithoutCompanyInput {

    @Field(() => [SettingCreateWithoutCompanyInput], {nullable:true})
    @Type(() => SettingCreateWithoutCompanyInput)
    create?: Array<SettingCreateWithoutCompanyInput>;

    @Field(() => [SettingCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => SettingCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<SettingCreateOrConnectWithoutCompanyInput>;

    @Field(() => SettingCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => SettingCreateManyCompanyInputEnvelope)
    createMany?: SettingCreateManyCompanyInputEnvelope;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;
}
