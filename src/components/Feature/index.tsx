import { useState, useRef } from 'react'
import styled from 'styled-components'

import { NextJSCard } from './NextJS'
import { PythonCard } from './Python'
import { ReactCard } from './React'
import { MongodbCard } from './Mongo'
import { NodejsCard } from './Nodejs'
import { ExpressCard } from './Express'
import { TailwindCard } from './Tailwind'
import { ArduinoCard } from './Arduino'

import { motion } from 'framer-motion'
import { SmallCard } from './SmallCard'

// click sound effect

const AstroGrid = styled.div`
    .noise-panel{
        position: relative;
        isolation: isolate;
        border-width: 1px;
        --tw-border-opacity: 1;
        border-color: rgb(52 56 65 / var(--tw-border-opacity));
        --tw-bg-opacity: 1;
        --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
    }
`

const Info = (props: { info: string[], ref: React.RefObject<Element> }) => (
    <motion.div
        drag
        dragConstraints={{ top: -300, bottom: 1000, left: 0, right: 0 }}
        dragElastic={0.1}
        dragMomentum={false}
        className='max-w-[250px] absolute right-4 top-[400px] p-10 pt-16 z-10 tiny-border 
        rounded-lg bg-green-700 bg-opacity-20 shadow-lg shadow-[rgba(0, 0, 0, 0.5)] hidden md:block'
    >
        <code className='absolute top-6 left-10'>Drag me</code>
        <code className='block mb-10'>
            Little Dev Tool :)
        </code>
        {props.info[0]}
        {props.info[0] === '' && "No class"}
        <code className='block mt-10'>
            {`<${props.info[1]} />`}
        </code>
    </motion.div>
)

export const FeaturesSection = () => {
    const [info, setInfo] = useState(['', ''])
    const constraintsRef = useRef(null)

    const changeInfo = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const DomClasses = target.classList
        const classes = Array.from(DomClasses).join(' ')

        const clickSoundEffect = new Audio('/src/assets/sound/clickSound.m4a')
        // clickSoundEffect.play()
        clickSoundEffect.currentTime = 0.2


        // const element = document.createElement('p')
        // element.className = 'absolute top-2 right-2'
        // element.innerText = classes
        // target.appendChild(element)


        setInfo([classes, target.tagName])
    }

    return (
        <section id="feature-section" className='flex flex-col items-center' onMouseOver={changeInfo} ref={constraintsRef}>
            <Info info={info} ref={constraintsRef} />
            <h1 className='font-JetBrains my-16 z-10 text-center'>
                Ferramentas que trabalhamos
            </h1>
            <div className='container mt-10 px-10 lg:px-0'>
                <AstroGrid className='grid min-w-0 max-w-screen-xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className='sm:col-span-2'>
                        <PythonCard />
                    </div>
                    <NodejsCard />
                    <NextJSCard />
                    <div className="grid lg:col-span-2">
                        <MongodbCard />
                    </div>
                    <ReactCard />
                    <ExpressCard />
                    <TailwindCard />
                    <div className='grid sm:col-span-2 lg:col-span-3 bg-orange-500'>
                        <ArduinoCard />
                    </div>
                    <div className='grid sm:col-span-2 lg:col-span-3 bg-slate-600 p-4'>
                        <h1>Em breve</h1>
                    </div>
                    <SmallCard
                        img="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_08cbb05caf3271616f7fef03768dfbf5/fusion-360.png" alt="Fusion 360 logo"
                        aside="CAD design"
                        text="Para qualquer projeto real, desde o design até verdadeiras maquinas"
                        button='Explore F360'
                        href='https://www.autodesk.com/products/fusion-360/overview'
                    />
                    <SmallCard
                        img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/820px-Google_Ads_logo.svg.png"
                        alt="Google Ads logo"
                        colors={['rgb(250 191 0)', 'rgb(59 143 217)']}
                        aside="Gere tráfego para seu site!"
                        text='Google Ads é a maior ferramente de anúncios e trafego do mundo!'
                        button='Saiba mais'
                        href='https://ads.google.com/'
                    />
                    <SmallCard
                        img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" alt="Aws logo"
                        colors={['rgb(249 248 255)', 'rgb(249 248 255)']}
                        aside='Get to the clouds!'
                        text='AWS é a ferramente de cloud mais famosa do mundo, uma verdadeira toolkit'
                        button='Saiba mais'
                        href='https://aws.amazon.com/'
                    />
                </AstroGrid>
            </div>

        </section>
    )
}