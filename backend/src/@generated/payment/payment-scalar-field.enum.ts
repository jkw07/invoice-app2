import { registerEnumType } from '@nestjs/graphql';

export enum PaymentScalarFieldEnum {
    id = "id",
    method = "method",
    createdAt = "createdAt"
}


registerEnumType(PaymentScalarFieldEnum, { name: 'PaymentScalarFieldEnum', description: undefined })
