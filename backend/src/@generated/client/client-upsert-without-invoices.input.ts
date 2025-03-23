import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientUpdateWithoutInvoicesInput } from './client-update-without-invoices.input';
import { Type } from 'class-transformer';
import { ClientCreateWithoutInvoicesInput } from './client-create-without-invoices.input';
import { ClientWhereInput } from './client-where.input';

@InputType()
export class ClientUpsertWithoutInvoicesInput {

    @Field(() => ClientUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => ClientUpdateWithoutInvoicesInput)
    update!: ClientUpdateWithoutInvoicesInput;

    @Field(() => ClientCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => ClientCreateWithoutInvoicesInput)
    create!: ClientCreateWithoutInvoicesInput;

    @Field(() => ClientWhereInput, {nullable:true})
    @Type(() => ClientWhereInput)
    where?: ClientWhereInput;
}
