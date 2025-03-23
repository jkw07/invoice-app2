import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ReminderScalarWhereInput {

    @Field(() => [ReminderScalarWhereInput], {nullable:true})
    AND?: Array<ReminderScalarWhereInput>;

    @Field(() => [ReminderScalarWhereInput], {nullable:true})
    OR?: Array<ReminderScalarWhereInput>;

    @Field(() => [ReminderScalarWhereInput], {nullable:true})
    NOT?: Array<ReminderScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    companyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    invoiceId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    reminderType?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    reminderDate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    completed?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
