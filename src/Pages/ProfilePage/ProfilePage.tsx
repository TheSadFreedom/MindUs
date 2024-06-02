import React, { useEffect, useState } from "react";
import {
  UserPageStyled,
  UserPageStyledCont1,
  UserPageStyledCont2,
  UserPageStyledImg,
  UserPageStyledQuit,
} from "./ProfilePage.styled";
import { StyledH1 } from "../../styles/styled";
import { MyButton } from "../../Components/Buttons/MyButton/MyButton";

export const ProfilePage = () => {
  return (
    <UserPageStyled>
      <UserPageStyledCont1>
      <UserPageStyledImg/>
        <UserPageStyledCont2>
          <StyledH1>1</StyledH1>
          <UserPageStyledQuit to={"/"}>Выйти из профиля</UserPageStyledQuit>
        </UserPageStyledCont2>
        <MyButton/>
      </UserPageStyledCont1>
    </UserPageStyled>
  );
};
