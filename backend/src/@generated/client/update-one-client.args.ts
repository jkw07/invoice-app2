import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientUpdateInput } from './client-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@ArgsType()
export class UpdateOneClientArgs {

    @Field(() => ClientUpdateInput, {nullable:false})
    @Type(() => ClientUpdateInput)
    data!: ClientUpdateInput;

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    @Type(() => ClientWhereUniqueInput)
    where!: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;
}
