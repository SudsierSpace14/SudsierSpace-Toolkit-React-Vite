import styled from 'styled-components'

export const Nav = styled.nav`
    position: relative;
    z-index: 10;
    &::after{
        content: '';
        position: absolute;
        bottom: -40px;
        left: 0;
        width: 100%;
        height: 40px;
        background: linear-gradient(0deg, rgba(31, 41, 55, 0) 0%, rgb(31, 41, 55) 100%);
    }
`

export const Sud = styled.h1`
    position: relative;
    text-align: center;
    
    a:hover, a:focus-within {
        outline: none;
        color: white;
        filter: drop-shadow(0 0 2em white);
    }

    @media (min-width: 768px){
        p{
            position: absolute;
            opacity: 0;
            transition: 0.3s;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        &:hover p{
            opacity: 1;
            top: 30px;
        }
    }
`

export const Item = styled.div`
    a:hover, a:focus-within {
        outline: none;
        color: #13e400;
        filter: drop-shadow(0 0 2em #13e400);
    }
`