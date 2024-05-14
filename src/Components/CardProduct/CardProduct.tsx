import React from "react";

import {
  CardProductStyled,
  CardProductStyledHead,
  CardProductStyledHeadImg,
  CardProductStyledHeadTitle,
  CardProductStyledDescription,
  CardProductStyledDescriptionTitle,
  CardProductStyledDescriptionText,
} from "./CardProduct.styled";

export const CardProduct = () => {
  return (
    <CardProductStyled>
      <CardProductStyledHead>
        <CardProductStyledHeadImg></CardProductStyledHeadImg>
        <CardProductStyledHeadTitle>Название</CardProductStyledHeadTitle>
      </CardProductStyledHead>
      <CardProductStyledDescription>
        <CardProductStyledDescriptionTitle>
          Описание
        </CardProductStyledDescriptionTitle>
        <CardProductStyledDescriptionText>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac sclitora torquent per conubia nostra, per inceptos
          himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque
          ante..
        </CardProductStyledDescriptionText>
      </CardProductStyledDescription>
    </CardProductStyled>
  );
};
