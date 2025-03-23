import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutClientsInput } from './company-create-without-clients.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutClientsInput } from './company-create-or-connect-without-clients.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutClientsInput {

    @Field(() => CompanyCreateWithoutClientsInput, {nullable:true})
    @Type(() => CompanyCreateWithoutClientsInput)
    create?: CompanyCreateWithoutClientsInput;

    @Field(() => CompanyCreateOrConnectWithoutClientsInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutClientsInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutClientsInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;
}
