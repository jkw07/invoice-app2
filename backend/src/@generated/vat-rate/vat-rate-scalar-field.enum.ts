import { registerEnumType } from '@nestjs/graphql';

export enum VatRateScalarFieldEnum {
    id = "id",
    userId = "userId",
    type = "type",
    rate = "rate",
    createdAt = "createdAt"
}


registerEnumType(VatRateScalarFieldEnum, { name: 'VatRateScalarFieldEnum', description: undefined })
