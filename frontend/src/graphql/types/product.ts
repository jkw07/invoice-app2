import { VatRateType } from "./enums";

export interface ProductFull {
  id: number;
  name: string;
  description: string | null;
  price: number;
  unit: string | null;
  taxType: VatRateType;
  taxRate: number | null;
}

export interface GetProductsByCompanyQuery {
  getProductsByCompany: ProductFull[];
}

export interface GetProductsByCompanyVariables {
  companyId: number;
}

export interface GetProductByIdVariables {
  productId: number;
}

export interface GetProductByIdQuery {
  getProductById: ProductFull;
}
