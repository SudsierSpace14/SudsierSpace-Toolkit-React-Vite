import styled from 'styled-components'
import Nodejs from '../../assets/lang/nodejs.svg'

const Card = styled.article`
        background: linear-gradient(333deg, rgb(20 20 20) 0%, rgb(55 54 58) 100%);
    transition: 0.3s;

    *{
        transition: 0.3s;
    }

    &:hover, *:hover{
        scale: 1.05;
        background-size: 120%;
    }
`

export const NodejsCard = () => {
    return (
        <Card className='noise-panel flex flex-col bg-blue-500 text-gray-100'>
            <a href="https://nodejs.org/" target='_blank' className="flex justify-center flex-col gap-6 p-6 text-left cursor-pointer">
                <aside>
                    <code className='inline-block'>The big known</code>
                </aside>
                <img src={Nodejs} alt="nodejs-logo" className='h-full mx-16 flex-1' />
                <p className="text-gray-100 font-JetBrains">
                    Open-source, cross-platform JavaScript runtime environment.
                </p>
                <footer className="mt-auto">
                    <button className="btn bg-green-700">Node JS</button>
                </footer>
            </a>
        </Card>
    )
}