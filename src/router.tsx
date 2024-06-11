import { Route, Routes } from "react-router-dom";
import React from "react";
import { Header } from "./Components/Header/Header";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Footer } from "./Components/Footer/Footer";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage"
import { ShopPage } from "./Pages/ShopPage/ShopPage"
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { ContactsPage } from "./Pages/ContactsPage/ContactsPage";
import { ProductPage } from "./Pages/ProductPage/Product";

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="SignUp" element={<SignUpPage />} />
        <Route path="Shop" element={<ShopPage />} />
        <Route path="User" element={<ProfilePage />} />
        <Route path="Contacts" element={<ContactsPage />} />
        <Route path="Product" element={<ProductPage />} />
      </Routes>

      <Footer />
    </>
  );
};
