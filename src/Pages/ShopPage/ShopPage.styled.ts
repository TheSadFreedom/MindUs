import styled from "styled-components";

export const ShopPageStyled = styled("form")(() => ({
    height: '100%',
    width: '100vw',
    
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '0px',
    rowGap: '50px',

    justifyItems: 'center',
    padding: '20vh 0',
}));