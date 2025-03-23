import { registerEnumType } from '@nestjs/graphql';

export enum Status {
    DRAFT = "DRAFT",
    PENDING = "PENDING",
    PAID = "PAID",
    OVERDUE = "OVERDUE",
    CANCELLED = "CANCELLED",
    PARTIALLY_PAID = "PARTIALLY_PAID"
}


registerEnumType(Status, { name: 'Status', description: undefined })
