import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserPageStyled = styled("div")(() => ({
    display: 'flex',
}));

export const UserPageStyledCont1 = styled("div")(() => ({
    margin: '20vh 5vw',
    display: 'grid',
    gridTemplateColumns: '1fr 10fr 2fr'
}));

export const UserPageStyledCont2 = styled("div")(() => ({
    padding: '0 5vw'
}));

export const UserPageStyledImg = styled("img")(() => ({
    height: '150px',
    width: '150px',
    border: '1px solid white',
    borderRadius: '50px',
}));

export const UserPageStyledQuit = styled(Link)(() => ({
    fontFamily: 'Open Sans',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '300',
    textDecoration: 'none',
    color: '#f1f1f1',
}));