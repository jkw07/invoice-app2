import { Routes, Route, Navigate } from "react-router-dom";
import { NewProduct } from "./NewProduct";
import { ProductsList } from "./ProductsList";
import { EditProduct } from "./EditProduct";
import { ProductInfo } from "./ProductInfo";

export const ProductsHomePage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="new" element={<NewProduct />} />
        <Route path="edit/:id" element={<EditProduct />} />
        <Route path="info/:id" element={<ProductInfo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
