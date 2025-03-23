import { registerEnumType } from '@nestjs/graphql';

export enum InvoiceScalarFieldEnum {
    id = "id",
    companyId = "companyId",
    buyerId = "buyerId",
    paymentId = "paymentId",
    recipient = "recipient",
    invoiceType = "invoiceType",
    invoiceNo = "invoiceNo",
    issuedDate = "issuedDate",
    transactionDate = "transactionDate",
    dueDate = "dueDate",
    paymentMethod = "paymentMethod",
    paymentDate = "paymentDate",
    description = "description",
    totalAmount = "totalAmount",
    currency = "currency",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(InvoiceScalarFieldEnum, { name: 'InvoiceScalarFieldEnum', description: undefined })
