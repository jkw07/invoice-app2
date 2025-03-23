import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Type } from 'class-transformer';
import { ClientCreateWithoutInvoicesInput } from './client-create-without-invoices.input';

@InputType()
export class ClientCreateOrConnectWithoutInvoicesInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    @Type(() => ClientWhereUniqueInput)
    where!: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;

    @Field(() => ClientCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => ClientCreateWithoutInvoicesInput)
    create!: ClientCreateWithoutInvoicesInput;
}
