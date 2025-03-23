import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingCreateWithoutCompanyInput } from './setting-create-without-company.input';
import { Type } from 'class-transformer';
import { SettingCreateOrConnectWithoutCompanyInput } from './setting-create-or-connect-without-company.input';
import { SettingUpsertWithWhereUniqueWithoutCompanyInput } from './setting-upsert-with-where-unique-without-company.input';
import { SettingCreateManyCompanyInputEnvelope } from './setting-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SettingWhereUniqueInput } from './setting-where-unique.input';
import { SettingUpdateWithWhereUniqueWithoutCompanyInput } from './setting-update-with-where-unique-without-company.input';
import { SettingUpdateManyWithWhereWithoutCompanyInput } from './setting-update-many-with-where-without-company.input';
import { SettingScalarWhereInput } from './setting-scalar-where.input';

@InputType()
export class SettingUpdateManyWithoutCompanyNestedInput {

    @Field(() => [SettingCreateWithoutCompanyInput], {nullable:true})
    @Type(() => SettingCreateWithoutCompanyInput)
    create?: Array<SettingCreateWithoutCompanyInput>;

    @Field(() => [SettingCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => SettingCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<SettingCreateOrConnectWithoutCompanyInput>;

    @Field(() => [SettingUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => SettingUpsertWithWhereUniqueWithoutCompanyInput)
    upsert?: Array<SettingUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => SettingCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => SettingCreateManyCompanyInputEnvelope)
    createMany?: SettingCreateManyCompanyInputEnvelope;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;

    @Field(() => [SettingWhereUniqueInput], {nullable:true})
    @Type(() => SettingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SettingWhereUniqueInput, 'id'>>;

    @Field(() => [SettingUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => SettingUpdateWithWhereUniqueWithoutCompanyInput)
    update?: Array<SettingUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [SettingUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    @Type(() => SettingUpdateManyWithWhereWithoutCompanyInput)
    updateMany?: Array<SettingUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [SettingScalarWhereInput], {nullable:true})
    @Type(() => SettingScalarWhereInput)
    deleteMany?: Array<SettingScalarWhereInput>;
}
