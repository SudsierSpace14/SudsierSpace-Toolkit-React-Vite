import { Hero } from "../components/Hero"

// components
import { FeaturesSection } from "../components/Feature"
import { StartCreating } from '../sections/StartCreating'
import { Partners } from '../sections/Partners'
import { SocialMedia } from '../sections/Social-Media'

export const Home = () => {
    return (
        <main className='relative'>
            <div className="noise"></div>
            <Hero />
            <div className='relative overflow-hidden'>
                <div className='bg-grid absolute inset-0'></div>
                <FeaturesSection />
                {/* <CardSectionWrapper>
                    <CardSection cards={cards} type="Front-end" />
                    <CardSection cards={cards} type="Back-end" reverse={true} />
                    <CardSection cards={cards} type="Mobile Development" />
                    <CardSection cards={cards4} type="IoT" reverse={true} />
                </CardSectionWrapper> */}
                <SocialMedia />
                <Partners />
                <StartCreating />
            </div>
        </main>
    )
}