import styled from "styled-components";

export const ScrollToTopButtonStyled = styled("div")(() => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: "9999",
  cursor: "pointer",
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
  fontSize: "calc(1.7vh + 1vw)",
  color: "rgba(241, 241, 241, 1)",
  border: "1px solid rgba(241, 241, 241, 1)",
  width: "calc(3.5vh + 2vw)",
  height: "calc(3.5vh + 2vw)",
  borderRadius: "calc(1.1vh + 0.6vw)",
}));
