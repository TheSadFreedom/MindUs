import React, { useState } from "react";
import { ContactsPageStyled, ContactsPageStyledImg, ContactsPageStyledLink, ContactsPageStyledLinks, ContactsPageStyledTitle } from "./ContactsPage.styled";

const Fluid: string = require("../../Images/Fluid.svg").default;

export const ContactsPage = () => {
    return (
        <ContactsPageStyled>
            <ContactsPageStyledTitle>Связаться с нами можно тут</ContactsPageStyledTitle>
            <ContactsPageStyledLinks>
                <ContactsPageStyledLink to="/">+7 (999) 999-99-99</ContactsPageStyledLink>
                <ContactsPageStyledLink to="/">Discord</ContactsPageStyledLink>
                <ContactsPageStyledLink to="/">Telegram</ContactsPageStyledLink>
                <ContactsPageStyledLink to="/">email@email.com</ContactsPageStyledLink>
            </ContactsPageStyledLinks>
            <ContactsPageStyledImg src={Fluid} alt="Fluid SVG" />
        </ContactsPageStyled>
  );
};
