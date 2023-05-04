import { Main, BackgroundSpace, Content } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from './Card'

import HFerro from '../../assets/h_ferro.webp'
import Lamp from '../../assets/hero/lamp.png'
import Build from '../../assets/hero/build.png'
import Check from '../../assets/hero/check.png'

// slider css
import './slidestyle.css'

const cards = [
    {
        icon: [Lamp, 'idea-lamp'],
        title: 'Idea',
        desc: 'npm create idea'
    },
    {
        icon: [Build, 'building-box'],
        title: 'Build',
        desc: 'npm run build'
    },
    {
        icon: [Check, 'checked'],
        title: 'Created',
        desc: 'npm start'
    },
]

export const Hero = () => {
    return (
        <Main className='w-full md:h-[90vh] h-[110vh] relative flex flex-wrap flex-col justify-center items-center md:justify-around md:flex-row md:items-start overflow-hidden'>
            <Content className='h-full flex flex-col  sm:mb-0'>
                <h1 className='font-JetBrains mb-32 mt-32 md:mb-0 z-10 sm px-4 sm:px-0'>
                    Continually evolving,
                    up to new things!
                </h1>
                <Swiper className="mySwiper">
                    {cards.map(card => (
                        <SwiperSlide key={card.icon[1]}>
                            <Card {...card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Content>

            <div className='mt-24 z-10 md:static absolute bottom-[-550px]'>
                <img
                    className='mx-auto'
                    src={HFerro}
                    alt="Le Gabriel Rodrigues"
                />
            </div>

            <BackgroundSpace className='w-full h-full absolute'></BackgroundSpace>
        </Main>
    )
}