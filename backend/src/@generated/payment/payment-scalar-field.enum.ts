import { registerEnumType } from '@nestjs/graphql';

export enum PaymentScalarFieldEnum {
    id = "id",
    userId = "userId",
    method = "method",
    createdAt = "createdAt"
}


registerEnumType(PaymentScalarFieldEnum, { name: 'PaymentScalarFieldEnum', description: undefined })
