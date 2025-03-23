import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';
import { Type } from 'class-transformer';
import { ClientOrderByWithRelationInput } from './client-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClientScalarFieldEnum } from './client-scalar-field.enum';

@ArgsType()
export class FindManyClientArgs {

    @Field(() => ClientWhereInput, {nullable:true})
    @Type(() => ClientWhereInput)
    where?: ClientWhereInput;

    @Field(() => [ClientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClientOrderByWithRelationInput>;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ClientScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ClientScalarFieldEnum}`>;
}
