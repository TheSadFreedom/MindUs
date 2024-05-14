import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { Header } from "./Components/Header/Header";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Footer } from "./Components/Footer/Footer";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage"
import { ShopPage } from "./Pages/ShopPage/ShopPage"
import { UserPage } from "./Pages/UserPage/UserPage";
import { ContactsPage } from "./Pages/ContactsPage/ContactsPage";

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="SignUp" element={<SignUpPage />} />
        <Route path="Shop" element={<ShopPage />} />
        <Route path="User" element={<UserPage />} />
        <Route path="Contacts" element={<ContactsPage />} />
      </Routes>

      <Footer />
    </>
  );
};
