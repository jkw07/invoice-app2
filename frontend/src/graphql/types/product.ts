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

//Query
export interface GetProductsByCompanyQuery {
  getProductsByCompany: ProductFull[];
}

export interface GetProductByIdQuery {
  getProductById: ProductFull;
}

//Mutation
export interface DeleteProductMutation {
  deleteProduct: {
    id: number;
  };
}

export interface AddProductMutation {
  addProduct: ProductBasic;
}

//VARIABLES
export interface GetProductsByCompanyVariables {
  companyId: number;
}

export interface DeleteProductVariables {
  productId: number;
}

export interface GetProductByIdVariables {
  productId: number;
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
