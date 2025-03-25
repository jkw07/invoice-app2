import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateCreateManyUserInput } from './vat-rate-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class VatRateCreateManyUserInputEnvelope {

    @Field(() => [VatRateCreateManyUserInput], {nullable:false})
    @Type(() => VatRateCreateManyUserInput)
    data!: Array<VatRateCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
