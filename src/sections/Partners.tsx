import MGMDigital from '../assets/partners/mgm-digital-logo.png'
import VirtualVale from '../assets/partners/virtual-vale-logo.png'

import { slideIn } from '../util/motion'
const slideInVariant = slideIn({ direction: 'up', type: 'spring' })

import { motion } from 'framer-motion'

export const Partners = () => {
    return (
        <section id="partners">
            <h1 className='text-center my-10'>Partners</h1>
            <div className="cointainer flex justify-around items-center flex-wrap gap-8">
                <a href="http://mgmdigital.com.br" target="_blank">
                    <motion.img
                        variants={slideInVariant}
                        initial="hidden"
                        whileInView="show"
                        src={MGMDigital}
                        alt="MGM Digiatl"
                    />
                </a>
                <a href="https://virtualvale.com.br" target="_blank">
                    <motion.img
                        variants={slideInVariant}
                        initial="hidden"
                        whileInView="show"
                        src={VirtualVale}
                        alt="Virtual Vale"
                    />
                </a>
            </div>
        </section>
    )
}