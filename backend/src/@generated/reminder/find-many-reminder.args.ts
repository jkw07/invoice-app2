import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReminderWhereInput } from './reminder-where.input';
import { Type } from 'class-transformer';
import { ReminderOrderByWithRelationInput } from './reminder-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReminderWhereUniqueInput } from './reminder-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReminderScalarFieldEnum } from './reminder-scalar-field.enum';

@ArgsType()
export class FindManyReminderArgs {

    @Field(() => ReminderWhereInput, {nullable:true})
    @Type(() => ReminderWhereInput)
    where?: ReminderWhereInput;

    @Field(() => [ReminderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReminderOrderByWithRelationInput>;

    @Field(() => ReminderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReminderWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReminderScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ReminderScalarFieldEnum}`>;
}
