import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VatRateCreateManyInput } from './vat-rate-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVatRateArgs {

    @Field(() => [VatRateCreateManyInput], {nullable:false})
    @Type(() => VatRateCreateManyInput)
    data!: Array<VatRateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
