import styled from 'styled-components'
import ExpressLogo from '../../assets/lang/expressjs.svg'

const Card = styled.article`
    background: linear-gradient(333deg, rgb(40 40 40) 0%, rgb(249 248 255) 100%);
    transition: 0.3s;

    *{
        transition: 0.3s;
    }

    &:hover, *:hover{
        scale: 1.05;
        background-size: 120%;
    }
`

export const ExpressCard = () => {
    return (
        <Card className='noise-panel flex flex-col text-gray-100 rounded-2xl'>
            <a href="https://expressjs.com/pt-br/" target='_blank' className="flex flex-1 flex-col gap-6 p-6 text-left cursor-pointer">
                <aside>
                    <code className='text-gray-800'>For the back-end</code>
                </aside>
                <img src={ExpressLogo} alt="express-logo" className='mx-10 flex-1 object-contain' />
                <p className="body text-gray-100 justify-self-end">
                    The web framework for APIs. Fast & flexible
                </p>
                <footer className="mt-auto">
                    <button className="btn bg-black">Express JS</button >
                </footer>
            </a>
        </Card>
    )
}