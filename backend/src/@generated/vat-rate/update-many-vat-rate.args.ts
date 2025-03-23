import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VatRateUpdateManyMutationInput } from './vat-rate-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VatRateWhereInput } from './vat-rate-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyVatRateArgs {

    @Field(() => VatRateUpdateManyMutationInput, {nullable:false})
    @Type(() => VatRateUpdateManyMutationInput)
    data!: VatRateUpdateManyMutationInput;

    @Field(() => VatRateWhereInput, {nullable:true})
    @Type(() => VatRateWhereInput)
    where?: VatRateWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
