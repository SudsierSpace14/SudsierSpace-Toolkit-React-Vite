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
        background: url("https://th.bing.com/th/id/OIG.8jZ59vVuwKZz_LVGz9yC?pid=ImgGn"), linear-gradient(247.23deg, #4af2c8 0%, #2f4cb3 100%);
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
                <h1 className="font-JetBrains">Agora é com você</h1>
                <h2 className="max-w-2xl">Entre em contato conosco e papo reto para crescer ou criar sua ideia ou negócio</h2>
                <p className='bg-green-500 px-4 py-2 rounded-2xl mt-5 mb-32 md:mb-0 z-10'>% Aproveita que estamos começando e negocie com ótimos preços</p>
                <a data-get-started="" href="http://mgmdigital.com.br/contato" className="btn bg-orange-500 button-white text-[24px] hover:scale-125 hover:-rotate-6">
                    Let's go!
                </a>
            </div>
        </Section>
    )
}