import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import {
  SignUpPageStyled,
  SignUpTitleStyled,
  SignUpInputStyled,
  SignUpButtonStyled
} from './SignUpPage.styled';

interface SignUpFormData {
  userLogin: string;
  userEmail: string;
  userPassword: string;
}

export const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    userLogin: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:7168/api/Users', formData);
      console.log('Registration successful:', response.data);
      // Handle success (e.g., show a success message or redirect to login page)
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <SignUpPageStyled onSubmit={handleSubmit}>
      <SignUpTitleStyled>Регистрация</SignUpTitleStyled>
      <SignUpInputStyled
        id="userLogin"
        label="Логин"
        variant="outlined"
        color="secondary"
        name="userLogin"
        type="text"
        value={formData.userLogin}
        onChange={handleChange}
        required
      />
      <SignUpInputStyled
        id="userEmail"
        label="Email"
        variant="outlined"
        color="secondary"
        name="userEmail"
        type="email"
        value={formData.userEmail}
        onChange={handleChange}
        required
      />
      <SignUpInputStyled
        id="userPassword"
        label="Пароль"
        variant="outlined"
        color="secondary"
        name="userPassword"
        type="password"
        value={formData.userPassword}
        onChange={handleChange}
        required
      />
      <SignUpButtonStyled type="submit">
        Зарегистрироваться
      </SignUpButtonStyled>
    </SignUpPageStyled>
  );
};
