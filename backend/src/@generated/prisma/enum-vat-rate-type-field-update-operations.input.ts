import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VatRateType } from './vat-rate-type.enum';

@InputType()
export class EnumVatRateTypeFieldUpdateOperationsInput {

    @Field(() => VatRateType, {nullable:true})
    set?: `${VatRateType}`;
}
