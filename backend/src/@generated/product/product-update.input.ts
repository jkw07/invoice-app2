import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CompanyUpdateOneRequiredWithoutProductsNestedInput } from '../company/company-update-one-required-without-products-nested.input';
import { VatRateUpdateOneRequiredWithoutProductsNestedInput } from '../vat-rate/vat-rate-update-one-required-without-products-nested.input';
import { InvoiceItemUpdateManyWithoutProductNestedInput } from '../invoice-item/invoice-item-update-many-without-product-nested.input';

@InputType()
export class ProductUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    unit?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CompanyUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    @Type(() => CompanyUpdateOneRequiredWithoutProductsNestedInput)
    company?: CompanyUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => VatRateUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    @Type(() => VatRateUpdateOneRequiredWithoutProductsNestedInput)
    vatRate?: VatRateUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => InvoiceItemUpdateManyWithoutProductNestedInput, {nullable:true})
    @Type(() => InvoiceItemUpdateManyWithoutProductNestedInput)
    invoiceItems?: InvoiceItemUpdateManyWithoutProductNestedInput;
}
