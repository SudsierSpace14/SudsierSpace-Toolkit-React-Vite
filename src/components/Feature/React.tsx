import styled from 'styled-components'
import ReactLogo from '../../assets/lang/react.svg'

const Card = styled.article`
    background: linear-gradient(333deg, rgb(59 130 246) 0%, #262552 100%);
    transition: 0.3s;

    *{
        transition: 0.3s;
    }

    &:hover, *:hover{
        scale: 1.05;
        background-size: 120%;
    }
`

export const ReactCard = () => {
    return (
        <Card className='noise-panel flex flex-col bg-blue-500 text-gray-100'>
            <a href="https://react.dev/" target='_blank' className="flex flex-1 justify-center flex-col gap-6 p-6 text-left cursor-pointer">
                <aside>
                    <code className='inline-block'>This website uses</code>
                </aside>
                <img src={ReactLogo} alt="react-logo" className='flex-1 mx-16' />
                <p className="body text-gray-100">
                    The library for web and native user interfaces
                </p>
                <footer className="mt-auto">
                    <button className="btn bg-blue-900">React JS</button>
                </footer>
            </a>
        </Card>
    )
}