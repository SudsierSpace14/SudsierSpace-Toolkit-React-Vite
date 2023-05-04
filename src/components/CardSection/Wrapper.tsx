import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.section`
    position: relative;
    &::before{
        position: absolute;
        content: "";
        z-index: -1;
        top: 0%;
        bottom: 10%;
        width: 150%;
        left: -25%;
        background: url(/assets/noise.webp) repeat,linear-gradient(83.21deg,#3245ff 0%,#bc52ee 100%);
        background-blend-mode: overlay;
        -webkit-mask-image: radial-gradient(rgba(0,0,0,.5),transparent 70%);
        mask-image: radial-gradient(rgba(0,0,0,.5),transparent 70%);
    }
`

interface Props {
    children: React.ReactNode
}

export const CardSectionWrapper: React.FC<Props> = ({ children }) => {
    return (
        <StyledWrapper className='overflow-hidden max-h-[50vh]'>
            {children}
        </StyledWrapper>
    )
}