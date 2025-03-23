import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';
import { Type } from 'class-transformer';
import { ClientUpdateWithoutInvoicesInput } from './client-update-without-invoices.input';

@InputType()
export class ClientUpdateToOneWithWhereWithoutInvoicesInput {

    @Field(() => ClientWhereInput, {nullable:true})
    @Type(() => ClientWhereInput)
    where?: ClientWhereInput;

    @Field(() => ClientUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => ClientUpdateWithoutInvoicesInput)
    data!: ClientUpdateWithoutInvoicesInput;
}
