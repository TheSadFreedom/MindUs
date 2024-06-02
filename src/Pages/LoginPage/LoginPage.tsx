import React from "react";
import { LoginPageStyled, LoginTitleStyled, LoginInputStyled, LoginButtonStyled } from "./LoginPage.styled";
import { login } from "../../services/services";

export const LoginPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await login({ email, password }); // Используем ваш сервис для входа
      console.log('Гуд');
      window.location.href = "/User";
      // Редирект или другие действия после успешного входа
    } catch (error) {
      // Обработка ошибки входа
      console.error("Ошибка при входе:", error);
    }
  };

  return (
    <LoginPageStyled onSubmit={handleSubmit}>
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
