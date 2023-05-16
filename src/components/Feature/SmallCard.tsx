import styled from 'styled-components'

interface CardStyleProps {
    colors?: string[]
}
// rgb(40 40 40)
//  rgb(249 248 255)
const Card = styled.article<CardStyleProps>`
    ${props => {
        if (props.colors) {
            return `background: linear-gradient(333deg, ${props.colors[0]} 0%, ${props.colors[1]} 100%);`
        }
        return 'background: linear-gradient(333deg, rgb(40 40 40) 0%, rgb(249 248 255) 100%);'
    }}
    
    transition: 0.3s;

    *{
        transition: 0.3s;
    }

    &:hover, *:hover{
        scale: 1.05;
        background-size: 120%;
    }
`

interface Props {
    img: string,
    alt: string,
    rounded?: string,
    colors?: string[],
    aside: string,
    text: string,
    button: string,
    href: string
}

export const SmallCard: React.FC<Props> = (props) => {
    const cardClass = 'noise-panel flex flex-col text-gray-100'
    const rounded = props.rounded ? 'rounded-2xl' : ''

    return (
        <Card className={cardClass + rounded} colors={props.colors}>
            <a href={props.href} target='_blank' className="flex flex-1 flex-col gap-6 p-6 text-left cursor-pointer">
                <aside>
                    <code className='text-gray-800'>{props.aside}</code>
                </aside>
                <img src={props.img} alt={props.alt} className='mx-10 flex-1 object-contain' />
                <p className="body text-gray-100 justify-self-end">
                    {props.text}
                </p>
                <footer className="mt-auto">
                    <button className="btn bg-black">{props.button}</button >
                </footer>
            </a>
        </Card>
    )
}