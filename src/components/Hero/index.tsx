import { Main, BackgroundSpace, Content } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from './Card'

import Lamp from '../../assets/hero/lamp.png'
import Build from '../../assets/hero/build.png'
import Check from '../../assets/hero/check.png'
import Growth from '../../assets/hero/diagram.png'

// slider css
import './slidestyle.css'

const cards = [
    {
        icon: [Lamp, 'idea-lamp'],
        title: 'Ideia',
        desc: 'sudkit create idea'
    },
    {
        icon: [Build, 'building-box'],
        title: 'Construção',
        desc: 'sudkit build'
    },
    {
        icon: [Check, 'checked'],
        title: 'Criada',
        desc: 'sudkit start'
    },
    {
        icon: [Growth, 'checked'],
        title: 'Divulgada',
        desc: 'sudkit grow'
    },
]

export const Hero = () => {
    return (
        <Main className='w-full md:h-[90vh] h-[110vh] relative flex flex-wrap flex-col justify-center items-center md:justify-around md:flex-row md:items-start overflow-hidden'>
            <Content className='h-full flex flex-col sm:mb-0'>
                <h1 className='font-JetBrains mt-32 z-10 sm px-4 sm:px-0'>
                    Criar para inovar,<br />
                    inovar para criar.<br />
                    <br />
                    Vá da idea até o resultado com nossa toolkit!
                </h1>
                <p className='bg-green-500 px-4 py-2 rounded-2xl mt-5 mb-32 md:mb-0 z-10'>% Aproveita que estamos começando e negocie com ótimos preços</p>
                <Swiper className="mySwiper">
                    {cards.map(card => (
                        <SwiperSlide key={card.icon[1]}>
                            <Card {...card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Content>

            <div className='mt-24 z-10 md:static absolute bottom-[-550px]'>
            </div>

            <BackgroundSpace className='w-full h-full absolute'></BackgroundSpace>
        </Main>
    )
}