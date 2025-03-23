import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientCreateManyInput } from './client-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyClientArgs {

    @Field(() => [ClientCreateManyInput], {nullable:false})
    @Type(() => ClientCreateManyInput)
    data!: Array<ClientCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
