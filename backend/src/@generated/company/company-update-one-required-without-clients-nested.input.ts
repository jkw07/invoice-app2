import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutClientsInput } from './company-create-without-clients.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutClientsInput } from './company-create-or-connect-without-clients.input';
import { CompanyUpsertWithoutClientsInput } from './company-upsert-without-clients.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateToOneWithWhereWithoutClientsInput } from './company-update-to-one-with-where-without-clients.input';

@InputType()
export class CompanyUpdateOneRequiredWithoutClientsNestedInput {

    @Field(() => CompanyCreateWithoutClientsInput, {nullable:true})
    @Type(() => CompanyCreateWithoutClientsInput)
    create?: CompanyCreateWithoutClientsInput;

    @Field(() => CompanyCreateOrConnectWithoutClientsInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutClientsInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutClientsInput;

    @Field(() => CompanyUpsertWithoutClientsInput, {nullable:true})
    @Type(() => CompanyUpsertWithoutClientsInput)
    upsert?: CompanyUpsertWithoutClientsInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id'>;

    @Field(() => CompanyUpdateToOneWithWhereWithoutClientsInput, {nullable:true})
    @Type(() => CompanyUpdateToOneWithWhereWithoutClientsInput)
    update?: CompanyUpdateToOneWithWhereWithoutClientsInput;
}
