import { VatRateType } from "./enums";

export interface ProductBasic {
  id: number;
  name: string;
}

export interface ProductFull extends ProductBasic {
  description: string | null;
  price: number;
  unit: string | null;
  vatRateId: number;
  vatRate: {
    id: number;
    type: VatRateType;
    rate: string | null;
  };
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

export interface AddProductMutation {
  addProduct: ProductBasic;
}

export interface AddProductVariables {
  input: {
    companyId: number;
    name: string;
    description: string | null;
    price: number;
    unit: string | null;
    vatRateId: number;
  };
}

export interface DeleteProductMutation {
  deleteProduct: {
    id: number;
  };
}

export interface DeleteProductVariables {
  productId: number;
}
