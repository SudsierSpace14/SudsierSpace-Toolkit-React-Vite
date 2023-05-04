import React from 'react';
import styled from 'styled-components'

export interface CardInfo {
    img: string,
    text?: string,
    href?: string,
    colors?: [string, string]
}

interface ItemProps {
    gradient: [string, string]
}

const Item = styled.li<ItemProps>`
    background-size: 400%;
    border-radius: 0.6rem;
    background-position: 100%;
    transition: 1s cubic-bezier(0.22,1,0.36,1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.514),0 2px 4px -2px rgba(0,0,0,0.1);

    --accent: ${props => props.gradient[0]};
    --descent: ${props => props.gradient[1]};

    &:hover, &:focus-within{
        outline: none;
        background-position: 0;
        background-image: linear-gradient(45deg, rgb(var(--accent)) 30%, rgb(var(--descent)) 60%, white);
    }
`

export const Card: React.FC<CardInfo> = ({ img, colors = ['255 90 2', '95, 1, 184'] }) => {
    return (
        <Item gradient={colors} className="list-none center w-64 h-64 bg-white rounded-xl text-black hover:p-2 focus-within:p-2">
            <a href="/astro" className='w-full h-full center flex-col p-4 bg-white bg-opacity-70 rounded-md'>
                <img className="w-1/2 mx-auto mb-6" src={img} alt="Astro logo" />

                <p className="astro-DOHJNAO5 text-center">
                    Learn how Astro works and explore the official API docs.
                </p>
            </a>
        </Item>
    )
}