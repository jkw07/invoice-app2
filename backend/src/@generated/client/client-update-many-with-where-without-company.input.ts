import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientScalarWhereInput } from './client-scalar-where.input';
import { Type } from 'class-transformer';
import { ClientUpdateManyMutationInput } from './client-update-many-mutation.input';

@InputType()
export class ClientUpdateManyWithWhereWithoutCompanyInput {

    @Field(() => ClientScalarWhereInput, {nullable:false})
    @Type(() => ClientScalarWhereInput)
    where!: ClientScalarWhereInput;

    @Field(() => ClientUpdateManyMutationInput, {nullable:false})
    @Type(() => ClientUpdateManyMutationInput)
    data!: ClientUpdateManyMutationInput;
}
