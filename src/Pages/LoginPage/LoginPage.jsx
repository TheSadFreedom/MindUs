import React, { useState } from "react";
import axios from "axios";

import {
  LoginPageStyled,
  LoginTitleStyled,
  LoginInputStyled,
  LoginButtonStyled,
} from "./LoginPage.styled";
import { Api_Client } from "../../services/Api_client";

export const LoginPage = () => {


  return (
    <LoginPageStyled>
      <LoginTitleStyled>Войти в аккаунт</LoginTitleStyled>
      <LoginInputStyled
        id="email-input"
        label="Email"
        variant="outlined"
        color="secondary"
        name="email"
      />
      <LoginInputStyled
        id="password-input"
        label="Пароль"
        variant="outlined"
        color="secondary"
        name="password"
        type="password"
      />
      <LoginButtonStyled type="submit">Войти</LoginButtonStyled>
    </LoginPageStyled>
  );
};
