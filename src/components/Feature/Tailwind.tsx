import styled from 'styled-components'
import TailwindLogo from '../../assets/lang/TailwindCss.svg'

const Card = styled.article`
    background: radial-gradient(circle, rgba(31,87,141,1) 0%, rgba(11,33,54,1) 100%);
    background-size: 100%;
    transition: 0.3s;

    *{
        transition: 0.3s;
    }

    &:hover, *:hover{
        scale: 1.05;
    }
`

export const TailwindCard = () => {
    return (
        <Card className='noise-panel flex flex-col text-gray-100'>
            <a href="https://tailwindcss.com/" target='_blank' className="flex flex-1 flex-col gap-6 p-6 text-left cursor-pointer">
                <aside>
                    <code>I love it</code>
                </aside>
                <img src={TailwindLogo} alt="tailwind-logo" className='mx-20 flex-1 object-contain' />
                <p className="body text-gray-100 justify-self-end">
                    Styles defined by classes! Keep it organized ._.
                    <br /><code>You can see the classes in the little draggable box</code>
                </p>
                <footer className="mt-auto">
                    <button className="btn bg-blue-500">Tailwind CSS</button>
                </footer>
            </a>
        </Card>
    )
}