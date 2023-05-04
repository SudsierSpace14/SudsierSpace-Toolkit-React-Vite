import styled from 'styled-components'
import python from '../../assets/lang/python.svg'
// import nextBanner from '../../assets/nextjs.png'

const Card = styled.a`
    background: linear-gradient(333deg, rgba(23,0,203,1) 0%, rgba(255,235,0,1) 100%);

    *{
        transition: 0.3s;
    }

    &:hover, *:hover{
        scale: 1.05;
        background-size: 120%;
    }

    img{
        position: relative;
        filter: drop-shadow(0 3rem 2rem rgba(0, 0, 0, 0.5))
    }

    img::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        background: radial-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)
    }
`

export const PythonCard = () => {
    return (
        <Card href='https://www.python.org/' target='_blank' className="w-full h-full p-6 flex items-center rounded-2xl relative cursor-pointer gap-8 tiny-border noise-panel">
            <img src={python} alt="python-logo" />
            <div>
                <h1 className='font-JetBrains text-3xl'>Python is the best for IoT</h1>
                <p>Arduino, Raspaberry Pi, Data science</p>
            </div>
        </Card>
    )
}