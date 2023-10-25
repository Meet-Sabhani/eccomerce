import React, { useContext } from "react";
import "./CSS/product.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Compponets/Breadcrums/Breadcrum";
import ProductDisplay from "../Compponets/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Compponets/DescriptionBox/DescriptionBox";
import ReletedProduct from "../Compponets/ReletedProduct/ReletedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <ReletedProduct/>
    </div>
  );
};

export default Product;
