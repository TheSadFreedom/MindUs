import { styled } from "@mui/material"
import { Link } from "react-router-dom"

export const FooterStyle = styled('footer')(() => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    width: '100vw',
    paddingTop: '40px',
    borderTop: '1px solid white',
    }))

export const FooterTitle = styled('p')(() => ({
    paddingLeft: '50px',
    color: '#f1f1f1',
    fontFamily: 'Open Sans',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal'
}))

export const FooterHeader = styled('p')(() => ({
    color: '#f1f1f1',
    fontFamily: 'Open Sans',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal'
}))

export const FooterLinks = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
    textDecoration: 'none',
    color: '#ababab',
    fontFamily: 'Open Sans',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '140%',
    paddingTop: '10px'
}))

export const FooterYear = styled('p')(() => ({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'end',
    paddingRight: '50px',
    fontFamily: 'Open Sans',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '140%',
}))

export const FooterLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: '#ababab',
}))
