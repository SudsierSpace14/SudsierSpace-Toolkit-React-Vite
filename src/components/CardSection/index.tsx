import React from 'react'
import { CardInfo, Card } from './Card'
import styled from 'styled-components'

interface Props {
    cards: CardInfo[],
    type: string,
    reverse?: boolean,
}

const Section = styled.section<{ reverse?: boolean }>`
    position: relative;
    @media (min-width: 768px){
        flex-direction: ${props => props.reverse ? 'row' : 'row-reverse'};
    }
`

export const CardSection: React.FC<Props> = ({ cards, type, reverse }) => {
    return (
        <Section reverse={reverse} className={"flex flex-col items-center p-0"}>
            <ul className="flex flex-wrap gap-4 p-16 justify-center">
                {cards.map(card => (
                    <Card key={card.img} img={card.img} colors={['255 90 2', '95, 1, 184']} />
                ))}
            </ul>
            <h1 className='flex-1 text-center font-JetBrains'>{type}</h1>
        </Section>
    )
}