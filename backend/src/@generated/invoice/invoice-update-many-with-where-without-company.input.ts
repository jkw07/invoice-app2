import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoiceScalarWhereInput } from './invoice-scalar-where.input';
import { Type } from 'class-transformer';
import { InvoiceUpdateManyMutationInput } from './invoice-update-many-mutation.input';

@InputType()
export class InvoiceUpdateManyWithWhereWithoutCompanyInput {

    @Field(() => InvoiceScalarWhereInput, {nullable:false})
    @Type(() => InvoiceScalarWhereInput)
    where!: InvoiceScalarWhereInput;

    @Field(() => InvoiceUpdateManyMutationInput, {nullable:false})
    @Type(() => InvoiceUpdateManyMutationInput)
    data!: InvoiceUpdateManyMutationInput;
}
