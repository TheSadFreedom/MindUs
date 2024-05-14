import React from "react";
import { CardProduct } from "../../Components/CardProduct/CardProduct";
import { ShopPageStyled } from "./ShopPage.styled";
export const ShopPage = () => {
  return (
    <ShopPageStyled>
      <CardProduct></CardProduct>
      <CardProduct></CardProduct>
    </ShopPageStyled>
  );
};
