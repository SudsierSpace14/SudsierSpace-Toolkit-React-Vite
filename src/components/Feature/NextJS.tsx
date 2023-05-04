import styled from 'styled-components'
import nextjs from '../../assets/lang/Nextjs-logo.svg'
// import nextBanner from '../../assets/nextjs.png'

const Card = styled.a`
    /* background-image: url("/src/assets/nextjs.png");
    background-size: 140%;
    background-position: 50% 180px; */

    img{
        --text-gradient: linear-gradient(180deg,#555,#fff);
        background: var(--text-gradient);
    }

    *{
        transition: 0.3s;
    }

    &:hover, *:hover{
        scale: 1.05;
        background-size: 120%;
    }
`

const Title = styled.h1`
    --text-gradient: linear-gradient(180deg,#555,#fff);
    background: var(--text-gradient);
    font-weight: 800;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    letter-spacing: -.05em;
    /* position: relative; */
`

export const NextJSCard = () => {
    return (
        <Card href="https://nextjs.org/" target='_blank' className="w-full h-full p-6 center flex-col rounded-2xl relative cursor-pointer tiny-border noise-panel">
            <div className='text-center z-10'>
                <Title className='font-JetBrains text-[3rem] mb-5 hover:shadow-2xl shadow-white'>Better for client-side</Title>
                <img className='p-10 rounded-lg' src={nextjs} alt="nextjs-logo" />
            </div>
        </Card>
    )
}