import { registerEnumType } from '@nestjs/graphql';

export enum VatRateType {
    STANDARD = "STANDARD",
    EXEMPT = "EXEMPT",
    NOT_TAXED = "NOT_TAXED"
}


registerEnumType(VatRateType, { name: 'VatRateType', description: undefined })
