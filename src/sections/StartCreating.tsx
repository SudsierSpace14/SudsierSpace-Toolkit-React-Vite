import styled from "styled-components"

const Section = styled.section`
    &::before{
        position: absolute;
        content: "";  
        bottom: -1000px;
        height: 1500px;
        width: 1500px;
        left: 50%;
        transform: translateX(-50%);
        background: url("/src/assets/everything (1).jfif"), linear-gradient(247.23deg, #4af2c8 0%, #2f4cb3 100%);
        background-position: 50% 0;
        background-blend-mode: overlay;
        -webkit-mask-image: radial-gradient(rgba(0, 0, 0, .7), transparent 70%);
        mask-image: radial-gradient(rgba(0, 0, 0, .7), transparent 70%);
    }
`

export const StartCreating = () => {
    return (
        <Section id="start-creating" className="overflow-hidden">
            <div className="container relative flex w-full flex-col items-center justify-end overflow-hidden px-4 text-center gap-12 mt-16 pb-16">
                <h1 className="shine-white mt-10">
                    SudsierSpace
                    <br />Toolkit
                </h1>
                <h1 className="font-JetBrains">Start creating now!</h1>
                <h2 className="max-w-2xl">Start creating anything with we I know, from web to reality!</h2>
                <a data-get-started="" href="/contact" className="btn bg-orange-500 button-white text-[24px]">
                    Get Started
                </a>
            </div>
        </Section>
    )
}