import React from 'react'
import {
  FooterStyle, 
  FooterHeader, 
  FooterTitle, 
  FooterLinks, 
  FooterYear,
  FooterLink
} from './Footer.styled'


export const Footer = () =>(
  <footer>
    <FooterStyle>
      <FooterTitle>AI Store</FooterTitle>
      <div>
        <FooterHeader>Контакты</FooterHeader>
        <FooterLinks>
          <FooterLink to={'/'}>+7 (999) 999-99-99</FooterLink>
          <FooterLink to={'/'}>Дискорд</FooterLink>
          <FooterLink to={'/'}>Телеграм</FooterLink>
          <FooterLink to={'/'}>email@gmail.com</FooterLink>
        </FooterLinks>
      </div>
      <div>
        <FooterHeader>Правовая информация</FooterHeader>
        <FooterLinks>
          <FooterLink to={'/'}>Политика конфиденциальности</FooterLink>
          <FooterLink to={'/'}>Условия пользования сайтом</FooterLink>
        </FooterLinks>
      </div>
      <FooterYear>@2023</FooterYear> 
    </FooterStyle>
  </footer>
)
