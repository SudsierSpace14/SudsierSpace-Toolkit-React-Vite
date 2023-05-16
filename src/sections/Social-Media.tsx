import { motion } from 'framer-motion'

import { slideIn } from '../util/motion'
const slideInVariant = slideIn({ direction: 'up', type: 'spring' })

import Upwork from '../assets/sociel-media/Upwork.png'
import Instagram from '../assets/sociel-media/Instagram.png'
import Linkedin from '../assets/sociel-media/LinkedIn.png'

export const SocialMedia = () => {
    return (
        <section id="social-media">
            <h1 className='text-center my-10'>Me encontre em</h1>
            <div className="container flex justify-center gap-8 md:justify-between items-center flex-wrap px-0 md:px-8">
                <a href="https://www.instagram.com/sudsierspace14/" target='_blank'>
                    <motion.img
                        variants={slideInVariant}
                        initial="hidden"
                        whileInView="show"
                        src={Instagram} // replace with the path to your Instagram image
                        alt="Instagram"
                        className='w-52'
                    />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-rodrigues-032a33271/" target='_blank'>
                    <motion.img
                        variants={slideInVariant}
                        initial="hidden"
                        whileInView="show"
                        src={Linkedin} // replace with the path to your Linkedin image
                        alt="Linkedin"
                        className='w-52'
                    />
                </a>
                <a href="https://www.upwork.com/freelancers/~01293a852ce6f0f0c7" target='_blank'>
                    <motion.img
                        variants={slideInVariant}
                        initial="hidden"
                        whileInView="show"
                        src={Upwork} // replace with the path to your Upwork image
                        alt="Upwork"
                        className='w-52'
                    />
                </a>
            </div>
        </section>
    )
}