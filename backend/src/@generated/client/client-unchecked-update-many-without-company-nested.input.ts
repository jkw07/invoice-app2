import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutCompanyInput } from './client-create-without-company.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutCompanyInput } from './client-create-or-connect-without-company.input';
import { ClientUpsertWithWhereUniqueWithoutCompanyInput } from './client-upsert-with-where-unique-without-company.input';
import { ClientCreateManyCompanyInputEnvelope } from './client-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithWhereUniqueWithoutCompanyInput } from './client-update-with-where-unique-without-company.input';
import { ClientUpdateManyWithWhereWithoutCompanyInput } from './client-update-many-with-where-without-company.input';
import { ClientScalarWhereInput } from './client-scalar-where.input';

@InputType()
export class ClientUncheckedUpdateManyWithoutCompanyNestedInput {

    @Field(() => [ClientCreateWithoutCompanyInput], {nullable:true})
    @Type(() => ClientCreateWithoutCompanyInput)
    create?: Array<ClientCreateWithoutCompanyInput>;

    @Field(() => [ClientCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<ClientCreateOrConnectWithoutCompanyInput>;

    @Field(() => [ClientUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => ClientUpsertWithWhereUniqueWithoutCompanyInput)
    upsert?: Array<ClientUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => ClientCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => ClientCreateManyCompanyInputEnvelope)
    createMany?: ClientCreateManyCompanyInputEnvelope;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ClientWhereUniqueInput, 'id'>>;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ClientWhereUniqueInput, 'id'>>;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ClientWhereUniqueInput, 'id'>>;

    @Field(() => [ClientWhereUniqueInput], {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ClientWhereUniqueInput, 'id'>>;

    @Field(() => [ClientUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => ClientUpdateWithWhereUniqueWithoutCompanyInput)
    update?: Array<ClientUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [ClientUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    @Type(() => ClientUpdateManyWithWhereWithoutCompanyInput)
    updateMany?: Array<ClientUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [ClientScalarWhereInput], {nullable:true})
    @Type(() => ClientScalarWhereInput)
    deleteMany?: Array<ClientScalarWhereInput>;
}
