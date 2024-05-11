import styled from "styled-components";
import { DownloadButtonStyled } from "../../Components/Buttons/DownloadButton/DownloadButton.styled";

export const MainPageStyled = styled("div")(() => ({
  width: '100vw',
  background: 'rgba(23, 22, 27, 1)',
  zIndex: '1',
}));

export const FirstSlideStyled = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 0.8fr",
  alignItems: "center",

  height: '100vh',
  width: '100vw',
}));

export const FirstSlideLeftStyled = styled("div")(() => ({
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    paddingLeft: '5vw',
}));

export const FirstSlideRightStyled = styled("div")(() => ({}));

export const UTPTitle = styled("h1")(() => ({
    fontFamily: 'sans-serif, Proxima Nova',
    fontWeight: 'calc(27vw + 49vh)',
    width: '46vw',
    fontSize: 'calc(3vh + 1.7vw)',
    color: 'rgba(241, 241, 241, 1)',
    lineHeight: 'calc(3vh + 1.7vw)'
}));

export const UTPShortInfo = styled("h3")(() => ({
    fontFamily: 'sans-serif, Open Sans',
    fontWeight: 'calc(25vh + 15vw)',
    width: '46vw',
    fontSize: 'calc(1.1vh + 0.6vw)',
    color: 'rgba(241, 241, 241, 1)',
    lineHeight: 'calc(1.6vh + 0.9vw)'
}));

export const UTPDownloadButton = styled(DownloadButtonStyled)(() => ({
  "&&": {
    width: '25vw',
    height: '9.7vh',
    fontSize: 'calc(1.6vh + 0.9vw)',
    fontWeight: 'calc(55vh + 31vw)',
    marginTop: '5vh',
  },
}));

export const FluidImg = styled("img")(() => ({
    width: 'calc(41vh + 23vw)',
}));

export const SecondSlideStyled = styled("div")(() => ({
  height: '100vh',
  width: '100vw',
}));

export const MyH1 = styled("h1")(() => ({
  fontFamily: 'Proxima Nova',
  color: '#F1F1F1',
  fontSize: '40px',
  zIndex: '9999',
  textAlign: 'center',
  marginTop: '5vh'
}))

export const ShortDescription = styled("p")(() => ({
  margin: '10vh 20vw',
  fontFamily: 'Open Sans',
  fontSize: '25px',
  fontWeight: '400',
  lineHeight: '35px',
  textAlign: 'justify',
  color: '#F1F1F1',
  paddingBottom: '10vh'
}))