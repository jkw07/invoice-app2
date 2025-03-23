import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderScalarWhereInput } from './reminder-scalar-where.input';
import { Type } from 'class-transformer';
import { ReminderUpdateManyMutationInput } from './reminder-update-many-mutation.input';

@InputType()
export class ReminderUpdateManyWithWhereWithoutCompanyInput {

    @Field(() => ReminderScalarWhereInput, {nullable:false})
    @Type(() => ReminderScalarWhereInput)
    where!: ReminderScalarWhereInput;

    @Field(() => ReminderUpdateManyMutationInput, {nullable:false})
    @Type(() => ReminderUpdateManyMutationInput)
    data!: ReminderUpdateManyMutationInput;
}
