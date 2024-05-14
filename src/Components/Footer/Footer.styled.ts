import { styled } from "@mui/material"
import { Link } from "react-router-dom"
import { StyledNavigationH2, StyledSmallP } from "../../styles/styled"

export const FooterStyle = styled('footer')(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    width: '100%',
    padding: '50px 100px',
    borderTop: '1px solid white',
    margin: 'auto',
    }))

export const FooterLinks = styled('div')(() => ({
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',
    rowGap: '10px',
}))