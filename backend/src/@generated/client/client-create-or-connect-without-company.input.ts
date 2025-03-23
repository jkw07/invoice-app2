import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Type } from 'class-transformer';
import { ClientCreateWithoutCompanyInput } from './client-create-without-company.input';

@InputType()
export class ClientCreateOrConnectWithoutCompanyInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    @Type(() => ClientWhereUniqueInput)
    where!: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;

    @Field(() => ClientCreateWithoutCompanyInput, {nullable:false})
    @Type(() => ClientCreateWithoutCompanyInput)
    create!: ClientCreateWithoutCompanyInput;
}
