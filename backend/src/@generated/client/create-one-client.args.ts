import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientCreateInput } from './client-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneClientArgs {

    @Field(() => ClientCreateInput, {nullable:false})
    @Type(() => ClientCreateInput)
    data!: ClientCreateInput;
}
