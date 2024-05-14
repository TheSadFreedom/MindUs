import React from "react";
//styles
import {
  StyledHeader,
  HeaderLogoStyled,
  HeaderLinksStyled,
  HeaderSignLinksStyled,
} from "./Header.styled";
//components
import { StyledNavigationLink } from "../../styles/styled";
import { Link } from "react-router-dom";

const Logo: string = require("../../Images/logo.svg").default;

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={"/"}>
        <HeaderLogoStyled src={Logo} alt="logo" />
      </Link>
      <HeaderLinksStyled>
        <StyledNavigationLink to="/">Главная</StyledNavigationLink>
        <StyledNavigationLink to="/Shop">Нейросети</StyledNavigationLink>
        <StyledNavigationLink to="/Contacts">Контакты</StyledNavigationLink>
      </HeaderLinksStyled>

      <HeaderSignLinksStyled>
        <StyledNavigationLink to="/Login" style={{ textAlign: "right" }}>
          Войти
        </StyledNavigationLink>
        <p>l</p>
        <StyledNavigationLink to="/SignUp" style={{ textAlign: "left" }}>
          Регистрация
        </StyledNavigationLink>
      </HeaderSignLinksStyled>
    </StyledHeader>
  );
};
