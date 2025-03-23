import { registerEnumType } from '@nestjs/graphql';

export enum SettingScalarFieldEnum {
    id = "id",
    companyId = "companyId",
    defaultCurrency = "defaultCurrency",
    exemptFromTax = "exemptFromTax",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SettingScalarFieldEnum, { name: 'SettingScalarFieldEnum', description: undefined })
