import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { Header } from "./Components/Header/Header";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Footer } from "./Components/Footer/Footer";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage"

import { ThemeProvider } from "styled-components";

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="SignUp" element={<SignUpPage />} />
      </Routes>

      <Footer />
    </>
  );
};
