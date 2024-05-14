import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigationLink = styled(Link)(() => ({
    fontFamily: 'Open Sans',
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '400',
    textDecoration: 'none',
    color: '#ababab',
}))

export const StyledNavigationH2 = styled('h2')(() => ({
    fontFamily: 'Open Sans',
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 'bold',
    color: '#ababab',
}))

export const StyledH1 = styled('h1')(() => ({
    fontFamily: 'Proxima Nova',
    fontSize: '40px',
    lineHeight: '40px',
    fontWeight: '800',
    color: '#f1f1f1',
}))

export const StyledH2 = styled('h2')(() => ({
    fontFamily: 'Open Sans',
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '800',
    color: '#f1f1f1',
}))

export const StyledH3 = styled('h3')(() => ({
    fontFamily: 'Open Sans',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '800',
    color: '#f1f1f1',
}))

export const StyledH4 = styled('h4')(() => ({
    fontFamily: 'Open Sans',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '800',
    color: '#f1f1f1',
}))

export const StyledLargeP = styled('p')(() => ({
    fontFamily: 'Open Sans',
    fontSize: '20px',
    lineHeight: '20px',
    fontWeight: '400',
    color: '#f1f1f1',
}))

export const StyledSmallP = styled('p')(() => ({
    fontFamily: 'Open Sans',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '400',
    color: '#f1f1f1',
}))