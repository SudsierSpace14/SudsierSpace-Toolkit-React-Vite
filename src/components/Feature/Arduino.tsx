import styled from 'styled-components'
import ArduinoLogo from '../../assets/lang/arduino.svg'
import ArduinoBoard from '../../assets/arduino board.png'


const Card = styled.article`
    background: linear-gradient(333deg, rgb(127, 203, 205) 0%, rgb(37 77 78) 100%);
    transition: 0.3s;

    *{
        transition: 0.3s;
    }

    &:hover, *:hover{
        scale: 1.05;
        background-size: 120%;
    }

    img{
        fill: white;
    }
`

export const ArduinoCard = () => {
    return (
        <Card className='noise-panel flex flex-col min-w-0'>
            <a href="https://www.arduino.cc/" target='_blank' className='flex flex-col gap-6 p-6 text-left'>
                <div className='flex flex-col gap-6 p-6 text-left'>
                    <aside>
                        <code>Real life stuff</code>
                    </aside>
                    <div className="flex flex-1 flex-col justify-center gap-6">
                        <img src={ArduinoLogo} alt="" className='w-[256px]' />
                        <h3 className="heading-3 text-gray-100 text-[32px]">
                            <span className="lg:heading-2 lg:leading-[1.1]">Open Source board for electronics and IoT!</span>
                        </h3>
                        <p className="body text-gray-100">
                            <code className="rounded-sm bg-white/20 py-0.5 px-1.5">void loop(){"{ }"}</code>
                        </p>
                        <div className="mt-auto lg:mt-0">
                            <button className="btn bg-slate-600 button-white">
                                Arduino.cc
                            </button>
                        </div>
                    </div>
                    <img
                        src={ArduinoBoard}
                        alt="Arduino board"
                        className='absolute w-[250px] lg:w-[456px] -bottom-[100px] -right-6 md:-right-[50px]'
                    />
                </div>
            </a>
        </Card>
    )
}