import styled from 'styled-components'

const Card = styled.article`
    background: linear-gradient(333deg, rgb(250 191 0) 0%, rgb(59 143 217) 100%);
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

export const GoogleAds = () => {
    return (
        <div className='grid sm:col-span-2 lg:col-span-3 bg-orange-500'>

            <Card className='noise-panel flex flex-col min-w-0'>
                <a href="https://ads.google.com/intl/pt-BR_br/home/" target='_blank' className='flex flex-col gap-6 p-6 text-left'>
                    <div className='flex flex-col gap-6 p-6 text-left'>
                        <aside>
                            <code>More views stuff for this website</code>
                        </aside>
                        <div className="flex flex-1 flex-col items-center justify-center gap-6">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/820px-Google_Ads_logo.svg.png' alt='Google Ads Logo' className='w-[256px]' />
                            <h3 className="heading-3 text-gray-100 text-[32px]">
                                <span className="lg:heading-2 lg:leading-[1.1]">The big tool for engaging your website to the tower of google search!</span>
                            </h3>
                            <p className="body text-gray-100">
                                <code className="rounded-sm bg-white/20 py-0.5 px-1.5">Add campaigns!</code>
                            </p>
                            <div className="mt-auto lg:mt-0">
                                <button className="btn bg-blue-500 button-white">
                                    Ads.Google
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            </Card>
        </div>
    )
}