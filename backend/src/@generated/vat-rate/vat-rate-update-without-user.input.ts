import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumVatRateTypeFieldUpdateOperationsInput } from '../prisma/enum-vat-rate-type-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUpdateManyWithoutVatRateNestedInput } from '../product/product-update-many-without-vat-rate-nested.input';

@InputType()
export class VatRateUpdateWithoutUserInput {

    @Field(() => EnumVatRateTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumVatRateTypeFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    rate?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutVatRateNestedInput, {nullable:true})
    @Type(() => ProductUpdateManyWithoutVatRateNestedInput)
    products?: ProductUpdateManyWithoutVatRateNestedInput;
}
