import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutRemindersInput } from './company-create-without-reminders.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutRemindersInput } from './company-create-or-connect-without-reminders.input';
import { CompanyUpsertWithoutRemindersInput } from './company-upsert-without-reminders.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateToOneWithWhereWithoutRemindersInput } from './company-update-to-one-with-where-without-reminders.input';

@InputType()
export class CompanyUpdateOneRequiredWithoutRemindersNestedInput {

    @Field(() => CompanyCreateWithoutRemindersInput, {nullable:true})
    @Type(() => CompanyCreateWithoutRemindersInput)
    create?: CompanyCreateWithoutRemindersInput;

    @Field(() => CompanyCreateOrConnectWithoutRemindersInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutRemindersInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutRemindersInput;

    @Field(() => CompanyUpsertWithoutRemindersInput, {nullable:true})
    @Type(() => CompanyUpsertWithoutRemindersInput)
    upsert?: CompanyUpsertWithoutRemindersInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyUpdateToOneWithWhereWithoutRemindersInput, {nullable:true})
    @Type(() => CompanyUpdateToOneWithWhereWithoutRemindersInput)
    update?: CompanyUpdateToOneWithWhereWithoutRemindersInput;
}
