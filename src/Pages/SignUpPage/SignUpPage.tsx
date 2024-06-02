import React, { useState } from "react";
import { SignUpPageStyled, SignUpTitleStyled, SignUpInputStyled, SignUpButtonStyled } from "./SignUpPage.styled";
import { register } from "../../services/services";

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(formData); // Используем ваш сервис для регистрации
      setSuccess(true);
      setError("");
    } catch (error) {
      setSuccess(false);
      setError("Ошибка при регистрации. Пожалуйста, попробуйте снова.");
    }
  };

  return (
    <SignUpPageStyled onSubmit={handleSubmit}>
      <SignUpTitleStyled>Регистрация</SignUpTitleStyled>
        <SignUpInputStyled
          id="username"
          label="Логин"
          variant="outlined"
          color="secondary"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <SignUpInputStyled
          id="email"
          label="Email"
          variant="outlined"
          color="secondary"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <SignUpInputStyled
          id="password"
          label="Пароль"
          variant="outlined"
          color="secondary"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <SignUpButtonStyled type="submit">Зарегистрироваться</SignUpButtonStyled>
      {error && <p>{error}</p>}
      {success && <p>Вы успешно зарегистрировались!</p>}
    </SignUpPageStyled>
  );
};
