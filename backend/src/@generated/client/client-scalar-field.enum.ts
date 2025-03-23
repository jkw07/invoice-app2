import { registerEnumType } from '@nestjs/graphql';

export enum ClientScalarFieldEnum {
    id = "id",
    companyId = "companyId",
    name = "name",
    tin = "tin",
    bin = "bin",
    street = "street",
    buildingNo = "buildingNo",
    apartmentNo = "apartmentNo",
    zipCode = "zipCode",
    city = "city",
    province = "province",
    county = "county",
    municipality = "municipality",
    email = "email",
    phone = "phone",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ClientScalarFieldEnum, { name: 'ClientScalarFieldEnum', description: undefined })
