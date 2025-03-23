import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PaymentScalarWhereWithAggregatesInput {

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PaymentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    method?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
