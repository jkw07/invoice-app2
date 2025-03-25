import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateScalarWhereInput } from './vat-rate-scalar-where.input';
import { Type } from 'class-transformer';
import { VatRateUpdateManyMutationInput } from './vat-rate-update-many-mutation.input';

@InputType()
export class VatRateUpdateManyWithWhereWithoutUserInput {

    @Field(() => VatRateScalarWhereInput, {nullable:false})
    @Type(() => VatRateScalarWhereInput)
    where!: VatRateScalarWhereInput;

    @Field(() => VatRateUpdateManyMutationInput, {nullable:false})
    @Type(() => VatRateUpdateManyMutationInput)
    data!: VatRateUpdateManyMutationInput;
}
