import React from "react";

import {
  CardProductStyled,
  CardProductStyledHead,
  CardProductStyledHeadImg,
  CardProductStyledDescription,
} from "./CardProduct.styled";
import { StyledH2, StyledH4, StyledSmallP } from "../../styles/styled";

export const CardProduct = () => {
  return (
    <CardProductStyled>
      <CardProductStyledHead>
        <CardProductStyledHeadImg></CardProductStyledHeadImg>
        <StyledH2>Название</StyledH2>
      </CardProductStyledHead>
      <CardProductStyledDescription>
        <StyledH4>
          Описание
        </StyledH4>
        <StyledSmallP>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac sclitora torquent per conubia nostra, per inceptos
          himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque
          ante..
        </StyledSmallP>
      </CardProductStyledDescription>
    </CardProductStyled>
  );
};
