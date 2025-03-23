import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutInvoicesInput } from './client-create-without-invoices.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutInvoicesInput } from './client-create-or-connect-without-invoices.input';
import { ClientUpsertWithoutInvoicesInput } from './client-upsert-without-invoices.input';
import { Prisma } from '@prisma/client';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateToOneWithWhereWithoutInvoicesInput } from './client-update-to-one-with-where-without-invoices.input';

@InputType()
export class ClientUpdateOneRequiredWithoutInvoicesNestedInput {

    @Field(() => ClientCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => ClientCreateWithoutInvoicesInput)
    create?: ClientCreateWithoutInvoicesInput;

    @Field(() => ClientCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: ClientCreateOrConnectWithoutInvoicesInput;

    @Field(() => ClientUpsertWithoutInvoicesInput, {nullable:true})
    @Type(() => ClientUpsertWithoutInvoicesInput)
    upsert?: ClientUpsertWithoutInvoicesInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: Prisma.AtLeast<ClientWhereUniqueInput, 'id'>;

    @Field(() => ClientUpdateToOneWithWhereWithoutInvoicesInput, {nullable:true})
    @Type(() => ClientUpdateToOneWithWhereWithoutInvoicesInput)
    update?: ClientUpdateToOneWithWhereWithoutInvoicesInput;
}
