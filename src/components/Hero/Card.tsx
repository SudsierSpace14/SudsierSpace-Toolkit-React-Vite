import { Blur } from "./styles"

export interface CardInfo {
    icon: string[],
    title: string,
    desc: string
}

export const Card: React.FC<CardInfo> = ({ icon, title, desc }) => {
    return (
        <div className='relative shadow-2xl shadow-black drop-shadow-xl bg-gray-800 p-4 tiny-border z-10'>
            <div>
                <h1 className='font-JetBrains'>{title}</h1>
                <code className="text-2xl rounded-sm bg-white/20 py-0.5 px-1.5">{desc}</code>
            </div>
            <Blur
                color="#61dafbaa"
                className='absolute w-1/2 bottom-1/2 translate-y-1/2 opacity-70'
                src={icon[0]}
                alt={icon[1]}
            />
        </div>
    )
}