import {
  UserPageStyled,
  UserPageStyledCont1,
  UserPageStyledCont2,
  UserPageStyledQuit,
} from "./ProfilePage.styled";
import { StyledH1 } from "../../styles/styled";
import { EditProfileBtn } from "../../Components/Buttons/EditProfileBtn/EditProfileBtn";
import { UploadAIBtn } from "../../Components/Buttons/UploadAIBtn/UploadAIBtn";

export const ProfilePage = () => {
  return (
    <UserPageStyled>
      <UserPageStyledCont1>
        <UserPageStyledCont2>
          <StyledH1>1</StyledH1>
          <UserPageStyledQuit to={"/"}>Выйти из профиля</UserPageStyledQuit>
        </UserPageStyledCont2>
        <EditProfileBtn/>
        <UploadAIBtn/>
      </UserPageStyledCont1>
    </UserPageStyled>
  );
};
