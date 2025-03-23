import { Product } from "../modules/products/types";

export const addProduct = async (product: {
  name: string;
  unitOfMeasuer: string;
  pkwiu: string;
  cn: string;
  pkob: string;
  netUnitPrice: number;
  vatRate: number;
  grossUnitPrice: number;
}) => {
  console.log("Adding product to Firestore", product);
};

export const getProducts = async () => {
  console.log("Fetching products from Firestore");
};

export const getProductById = async (productId: string) => {
  console.log("Fetching product by ID from Firestore", productId);
};

export const deleteProduct = async (productId: string) => {
  console.log("Deleting product from Firestore", productId);
};

export const updateProduct = async (
  productId: string,
  updatedData: Partial<Product>
) => {
  console.log("Updating product in Firestore", productId, updatedData);
};
