import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderCreateWithoutCompanyInput } from './reminder-create-without-company.input';
import { Type } from 'class-transformer';
import { ReminderCreateOrConnectWithoutCompanyInput } from './reminder-create-or-connect-without-company.input';
import { ReminderCreateManyCompanyInputEnvelope } from './reminder-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';

@InputType()
export class ReminderUncheckedCreateNestedManyWithoutCompanyInput {

    @Field(() => [ReminderCreateWithoutCompanyInput], {nullable:true})
    @Type(() => ReminderCreateWithoutCompanyInput)
    create?: Array<ReminderCreateWithoutCompanyInput>;

    @Field(() => [ReminderCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => ReminderCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<ReminderCreateOrConnectWithoutCompanyInput>;

    @Field(() => ReminderCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => ReminderCreateManyCompanyInputEnvelope)
    createMany?: ReminderCreateManyCompanyInputEnvelope;

    @Field(() => [ReminderWhereUniqueInput], {nullable:true})
    @Type(() => ReminderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>>;
}
