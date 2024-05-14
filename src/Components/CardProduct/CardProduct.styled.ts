import styled from "styled-components";
import { StyledNavigationLink } from "../../styles/styled";

export const CardProductStyled = styled("div")(() => ({
  padding: "40px",
  width: "35vw",
  height: "450px",
  border: "1px solid white",
  borderRadius: "10px", 
  
}));

export const CardProductStyledHead = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  columnGap: "3vw",
  alignItems: 'center',
}));

export const CardProductStyledHeadImg = styled("img")(() => ({
  width: "150px",
  height: "150px",
}));

export const CardProductStyledDescription = styled("div")(() => ({
}));

export const CardProductStyledLink = styled(StyledNavigationLink)(() => ({
   fontSize: '40px',
   color: '#f1f1f1'
}));
