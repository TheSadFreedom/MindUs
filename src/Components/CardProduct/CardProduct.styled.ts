import styled from "styled-components";

export const CardProductStyled = styled("div")(() => ({
  padding: "40px",
  width: "40vw",
  height: "60vh",
  border: "1px solid white",
  borderRadius: "10px", 
}));

export const CardProductStyledHead = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  columnGap: "3vw",
}));

export const CardProductStyledHeadImg = styled("img")(() => ({
  width: "150px",
  height: "150px",
}));

export const CardProductStyledHeadTitle = styled("h2")(() => ({
  fontFamily: "Proxima Nova",
  fontWeight: "800",
  fontSize: "32px",
  lineHeight: "42px",
  textAlign: "left",
  color: "#f1f1f1",
  height: "150px",
}));

export const CardProductStyledDescription = styled("div")(() => ({
  
}));

export const CardProductStyledDescriptionTitle = styled("h3")(() => ({
    fontFamily: "Proxima Nova",
    fontWeight: "800",
    fontSize: "24px",
    lineHeight: "32px",
    textAlign: "left",
    color: "#f1f1f1",
    height: "150px",
}));

export const CardProductStyledDescriptionText = styled("p")(() => ({
    fontFamily: "Open Sans",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "left",
    color: "#f1f1f1",
    height: "150px",
}));
