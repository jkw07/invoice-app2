import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    companyId = "companyId",
    name = "name",
    description = "description",
    price = "price",
    unit = "unit",
    taxType = "taxType",
    taxRate = "taxRate",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
