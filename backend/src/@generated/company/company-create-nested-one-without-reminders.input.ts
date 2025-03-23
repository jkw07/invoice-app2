import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutRemindersInput } from './company-create-without-reminders.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutRemindersInput } from './company-create-or-connect-without-reminders.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutRemindersInput {

    @Field(() => CompanyCreateWithoutRemindersInput, {nullable:true})
    @Type(() => CompanyCreateWithoutRemindersInput)
    create?: CompanyCreateWithoutRemindersInput;

    @Field(() => CompanyCreateOrConnectWithoutRemindersInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutRemindersInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutRemindersInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
