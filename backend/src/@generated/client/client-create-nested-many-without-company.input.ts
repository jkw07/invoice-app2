import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutCompanyInput } from './client-create-without-company.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutCompanyInput } from './client-create-or-connect-without-company.input';
import { ClientCreateManyCompanyInputEnvelope } from './client-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientCreateNestedManyWithoutCompanyInput {

    @Field(() => [ClientCreateWithoutCompanyInput], {nullable:true})
    @Type(() => ClientCreateWithoutCompanyInput)
    create?: Array<ClientCreateWithoutCompanyInput>;

    @Field(() => [ClientCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<ClientCreateOrConnectWithoutCompanyInput>;

    @Field(() => ClientCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => ClientCreateManyCompanyInputEnvelope)
    createMany?: ClientCreateManyCompanyInputEnvelope;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ClientWhereUniqueInput, 'id'>>;
}
