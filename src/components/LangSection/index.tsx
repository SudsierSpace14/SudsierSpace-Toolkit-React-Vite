interface Props {
    img: [string, string],
    lang: string,
    subtitle: string,
    text: string,
    progress: number
}

export const LangSection: React.FC<Props> = (props) => {
    return (
        <section id={props.lang.toLowerCase()} className="py-32 bg-slate-700">
            <main className="container center flex-col gap-8 text-center">
                <img src={props.img[0]} alt={props.img[1]} />
                <h1 className="font-JetBrains">{props.lang}</h1>
                <h4 className="font-JetBrains text-2xl">{props.subtitle}</h4>
                <p>{props.text}</p>
            </main>
        </section>
    )
}