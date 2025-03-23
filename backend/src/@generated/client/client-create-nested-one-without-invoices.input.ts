import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutInvoicesInput } from './client-create-without-invoices.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutInvoicesInput } from './client-create-or-connect-without-invoices.input';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientCreateNestedOneWithoutInvoicesInput {

    @Field(() => ClientCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => ClientCreateWithoutInvoicesInput)
    create?: ClientCreateWithoutInvoicesInput;

    @Field(() => ClientCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;
}
