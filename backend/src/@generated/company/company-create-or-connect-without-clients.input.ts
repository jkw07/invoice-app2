import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutClientsInput } from './company-create-without-clients.input';

@InputType()
export class CompanyCreateOrConnectWithoutClientsInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyCreateWithoutClientsInput, {nullable:false})
    @Type(() => CompanyCreateWithoutClientsInput)
    create!: CompanyCreateWithoutClientsInput;
}
