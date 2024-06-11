import React from "react";
import {
  CardProductStyled,
  CardProductStyledHead,
  CardProductStyledDescription,
} from "./CardProduct.styled";
import { StyledH4, StyledSmallP, StyledTitleLink } from "../../styles/styled";
import { CallBtn } from "../Buttons/CallBtn/CallBtn";

interface Props {
  name: string;
  author: number;
  description: string;
}

export const CardProduct: React.FC<Props> = ({ name, author, description }) => {
  return (
    <CardProductStyled>
      <CardProductStyledHead>
        <StyledTitleLink to={"/Product"}>{name}</StyledTitleLink>
        <StyledSmallP>Author: {author}</StyledSmallP>
      </CardProductStyledHead>
      <CardProductStyledDescription>
        <StyledH4>Description:</StyledH4>
        <StyledSmallP>{description}</StyledSmallP>
      </CardProductStyledDescription>
      <CallBtn></CallBtn>
    </CardProductStyled>
  );
};
