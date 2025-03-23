import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';
import { CompanyUpdateWithoutUserInput } from './company-update-without-user.input';
import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';

@InputType()
export class CompanyUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyUpdateWithoutUserInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutUserInput)
    update!: CompanyUpdateWithoutUserInput;

    @Field(() => CompanyCreateWithoutUserInput, {nullable:false})
    @Type(() => CompanyCreateWithoutUserInput)
    create!: CompanyCreateWithoutUserInput;
}
