import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  SignUpPageStyled,
  SignUpTitleStyled,
  SignUpInputStyled,
  SignUpButtonStyled,
} from "./SignUpPage.styled";

export const SignUpPage = () => {
  return (
    <SignUpPageStyled>
      <SignUpTitleStyled>Регистрация</SignUpTitleStyled>
        <SignUpInputStyled
          id="username"
          label="Логин"
          variant="outlined"
          color="secondary"
          name="username"
        />
        <SignUpInputStyled
          id="email"
          label="Email"
          variant="outlined"
          color="secondary"
          name="email"
        />
        <SignUpInputStyled
          id="password"
          label="Пароль"
          variant="outlined"
          color="secondary"
          name="password"
          type="password"
        />
        <SignUpButtonStyled type="submit">Зарегистрироваться</SignUpButtonStyled>
    </SignUpPageStyled>
  );
};
