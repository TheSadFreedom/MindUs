import React, { useState } from "react";
import {
  UserPageStyled,
  UserPageStyledCont1,
  UserPageStyledCont2,
  UserPageStyledImg,
  UserPageStyledQuit,
} from "./UserPage.styled";
import { StyledH1 } from "../../styles/styled";
import { MyButton } from "../../Components/Buttons/MyButton/MyButton";

export const UserPage = () => {
  return (
    <UserPageStyled>
      <UserPageStyledCont1>
        <UserPageStyledImg></UserPageStyledImg>
        <UserPageStyledCont2>
          <StyledH1>Nickname</StyledH1>
          <UserPageStyledQuit to={"/"}>Выйти из профиля</UserPageStyledQuit>
        </UserPageStyledCont2>
        <MyButton></MyButton>
      </UserPageStyledCont1>
    </UserPageStyled>
  );
};
