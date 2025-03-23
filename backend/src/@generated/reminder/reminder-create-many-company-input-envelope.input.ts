import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReminderCreateManyCompanyInput } from './reminder-create-many-company.input';
import { Type } from 'class-transformer';

@InputType()
export class ReminderCreateManyCompanyInputEnvelope {

    @Field(() => [ReminderCreateManyCompanyInput], {nullable:false})
    @Type(() => ReminderCreateManyCompanyInput)
    data!: Array<ReminderCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
