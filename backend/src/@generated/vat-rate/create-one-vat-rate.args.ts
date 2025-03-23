import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VatRateCreateInput } from './vat-rate-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVatRateArgs {

    @Field(() => VatRateCreateInput, {nullable:false})
    @Type(() => VatRateCreateInput)
    data!: VatRateCreateInput;
}
