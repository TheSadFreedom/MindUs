import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled('div')(({theme}) => ({
    width: '90vw',
    height: '15vh',
    position: 'absolute',

    padding: '0 5vw',

    display: 'flex',
    justifyContent: 'center',
    columnGap: '7vw',
    alignItems: 'center',
}))

export const HeaderLogoStyled = styled('div')(({theme}) => ({
    width: '70px',
    height: '70px',
    background: 'white',
    borderRadius: '75px',
}))

export const HeaderLinksStyled = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '6.5vw',
    textAlign: 'center',
}))

export const HeaderLinkStyled = styled(Link)(({theme}) => ({
    fontFamily: 'sans-serif, OpenSans',
    textDecoration: 'none',
    fontSize: 'calc(1.3vh + 0.7vw)',
    color: 'rgba(241, 241, 241, 1)',
    fontWeight: '400'
}))

export const HeaderSignLinksStyled = styled('div')(({theme}) => ({
    display: 'flex',
    columnGap: '5px',
    alignItems: 'center',
    fontSize: 'calc(1vh + 0.5vw)',
    color: 'rgba(241, 241, 241, 1)',
}))

export const HeaderSignStyled = styled(Link)(({theme}) => ({
    fontFamily: 'sans-serif, OpenSans',
    textDecoration: 'none',
    fontSize: 'calc(0.9vh + 0.5vw)',
    color: 'rgba(241, 241, 241, 1)',
    fontWeight: 'calc(27.5vh + 15.5vw)',
}))