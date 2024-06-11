import React from "react";
import { LoginPageStyled, LoginTitleStyled, LoginInputStyled, LoginButtonStyled } from "./LoginPage.styled";

export const LoginPage = () => {
  return (
    <LoginPageStyled>
      <LoginTitleStyled>Войти в аккаунт</LoginTitleStyled>
      <LoginInputStyled
        id="email-input"
        label="Email"
        variant="outlined"
      />
      <LoginInputStyled
        id="password-input"
        label="Пароль"
        variant="outlined"
        color="secondary"
      />
      <LoginButtonStyled type="submit">Войти</LoginButtonStyled>
    </LoginPageStyled>
  );
};
