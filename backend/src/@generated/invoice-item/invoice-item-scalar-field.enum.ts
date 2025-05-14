import { registerEnumType } from '@nestjs/graphql';

export enum InvoiceItemScalarFieldEnum {
    id = "id",
    invoiceId = "invoiceId",
    productId = "productId",
    name = "name",
    unit = "unit",
    quantity = "quantity",
    unitPrice = "unitPrice",
    taxType = "taxType",
    taxRate = "taxRate",
    discount = "discount",
    totalNet = "totalNet",
    totalTax = "totalTax",
    totalGross = "totalGross"
}


registerEnumType(InvoiceItemScalarFieldEnum, { name: 'InvoiceItemScalarFieldEnum', description: undefined })
