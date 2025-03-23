import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Type } from 'class-transformer';
import { ClientUpdateWithoutCompanyInput } from './client-update-without-company.input';

@InputType()
export class ClientUpdateWithWhereUniqueWithoutCompanyInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    @Type(() => ClientWhereUniqueInput)
    where!: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;

    @Field(() => ClientUpdateWithoutCompanyInput, {nullable:false})
    @Type(() => ClientUpdateWithoutCompanyInput)
    data!: ClientUpdateWithoutCompanyInput;
}
