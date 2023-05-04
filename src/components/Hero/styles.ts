import styled from 'styled-components'

export const Main = styled.main`
    background-color: #0202027c;
    background: linear-gradient(333deg, rgb(31 34 42) 0%, rgb(31, 41, 55) 100%);
    position: relative;

    h1, p{
        filter: drop-shadow(0 0 0.5em black);
    }

    &::before{
        position: absolute;
        content: "";
        z-index: 1;
        top: 10px;
        width: 100%;
        height: 100vh;
        background: url(/assets/noise.webp) repeat, linear-gradient(83.21deg, rgb(255 235 0) 0%, rgb(255 0 0) 100%);
        -webkit-mask-image: radial-gradient(rgb(0 0 0 / 71%), transparent 50%);
        mix-blend-mode: screen;
    }

    &::after{
        content: '';
        z-index: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: linear-gradient(0deg, rgba(36,36,36,1) 0%, rgba(36,36,36,0) 100%);
    }
`

export const Content = styled.div`
    @media (min-width: 768px){
        width: 550px;
    }

    width: 268px;
`

export const Blur = styled.img`
    color: ${props => props.color};
    filter: drop-shadow(0 0 3em);
    z-index: -1;
`

export const BackgroundSpace = styled.div`
    background-position: center;
    background-image: url('/src/assets/everything1.jfif');
    opacity: .2;
    z-index: 0;
`