import React from "react";
//styles
import {
  StyledHeader,
  HeaderLogoStyled,
  HeaderLinksStyled,
  HeaderLinkStyled,
  HeaderSignStyled,
  HeaderSignLinksStyled,
} from "./Header.styled";
//components
import { HeaderButton } from "../Buttons/HeaderButton/HeaderButton";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderLogoStyled></HeaderLogoStyled>
      <HeaderLinksStyled>
        <HeaderLinkStyled to="/">Главная</HeaderLinkStyled>
        <HeaderLinkStyled to="/">Нейросети</HeaderLinkStyled>
        <HeaderLinkStyled to="/">Новости</HeaderLinkStyled>
        <HeaderLinkStyled to="/">Контакты</HeaderLinkStyled>
      </HeaderLinksStyled>
      <HeaderButton />
      <HeaderSignLinksStyled>
        <HeaderSignStyled to="/Login" style={{ textAlign: 'right'}}>Войти</HeaderSignStyled>
        <p>l</p>
        <HeaderSignStyled to="/SignUp" style={{ textAlign: 'left'}}>Регистрация</HeaderSignStyled>
      </HeaderSignLinksStyled>
    </StyledHeader>
  );
};
