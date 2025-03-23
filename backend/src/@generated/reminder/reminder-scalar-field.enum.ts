import { registerEnumType } from '@nestjs/graphql';

export enum ReminderScalarFieldEnum {
    id = "id",
    companyId = "companyId",
    invoiceId = "invoiceId",
    reminderType = "reminderType",
    reminderDate = "reminderDate",
    completed = "completed",
    message = "message",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReminderScalarFieldEnum, { name: 'ReminderScalarFieldEnum', description: undefined })
