import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderCreateWithoutCompanyInput } from './reminder-create-without-company.input';
import { Type } from 'class-transformer';
import { ReminderCreateOrConnectWithoutCompanyInput } from './reminder-create-or-connect-without-company.input';
import { ReminderUpsertWithWhereUniqueWithoutCompanyInput } from './reminder-upsert-with-where-unique-without-company.input';
import { ReminderCreateManyCompanyInputEnvelope } from './reminder-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';
import { ReminderUpdateWithWhereUniqueWithoutCompanyInput } from './reminder-update-with-where-unique-without-company.input';
import { ReminderUpdateManyWithWhereWithoutCompanyInput } from './reminder-update-many-with-where-without-company.input';
import { ReminderScalarWhereInput } from './reminder-scalar-where.input';

@InputType()
export class ReminderUpdateManyWithoutCompanyNestedInput {

    @Field(() => [ReminderCreateWithoutCompanyInput], {nullable:true})
    @Type(() => ReminderCreateWithoutCompanyInput)
    create?: Array<ReminderCreateWithoutCompanyInput>;

    @Field(() => [ReminderCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => ReminderCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<ReminderCreateOrConnectWithoutCompanyInput>;

    @Field(() => [ReminderUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => ReminderUpsertWithWhereUniqueWithoutCompanyInput)
    upsert?: Array<ReminderUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => ReminderCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => ReminderCreateManyCompanyInputEnvelope)
    createMany?: ReminderCreateManyCompanyInputEnvelope;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;

    @Field(() => [ReminderUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => ReminderUpdateWithWhereUniqueWithoutCompanyInput)
    update?: Array<ReminderUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [ReminderUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    @Type(() => ReminderUpdateManyWithWhereWithoutCompanyInput)
    updateMany?: Array<ReminderUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [ReminderScalarWhereInput], {nullable:true})
    @Type(() => ReminderScalarWhereInput)
    deleteMany?: Array<ReminderScalarWhereInput>;
}
