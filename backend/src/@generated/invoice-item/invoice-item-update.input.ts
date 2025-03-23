import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { EnumVatRateTypeFieldUpdateOperationsInput } from '../prisma/enum-vat-rate-type-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { InvoiceUpdateOneRequiredWithoutInvoiceItemsNestedInput } from '../invoice/invoice-update-one-required-without-invoice-items-nested.input';
import { ProductUpdateOneWithoutInvoiceItemsNestedInput } from '../product/product-update-one-without-invoice-items-nested.input';

@InputType()
export class InvoiceItemUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    unit?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    quantity?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    unitPrice?: DecimalFieldUpdateOperationsInput;

    @Field(() => EnumVatRateTypeFieldUpdateOperationsInput, {nullable:true})
    taxType?: EnumVatRateTypeFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    taxRate?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    discount?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    totalNet?: DecimalFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    totalTax?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    totalGross?: DecimalFieldUpdateOperationsInput;

    @Field(() => InvoiceUpdateOneRequiredWithoutInvoiceItemsNestedInput, {nullable:true})
    @Type(() => InvoiceUpdateOneRequiredWithoutInvoiceItemsNestedInput)
    invoice?: InvoiceUpdateOneRequiredWithoutInvoiceItemsNestedInput;

    @Field(() => ProductUpdateOneWithoutInvoiceItemsNestedInput, {nullable:true})
    @Type(() => ProductUpdateOneWithoutInvoiceItemsNestedInput)
    product?: ProductUpdateOneWithoutInvoiceItemsNestedInput;
}
