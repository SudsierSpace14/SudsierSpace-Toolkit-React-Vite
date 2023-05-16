import NR from '../../assets/NR.jpg'
import jetengine from '../../assets/jet-engine.jpg'
import money from '../../assets/money-explosion-02.jpg'
import styled from 'styled-components'

interface Props {
    img: string,
    alt: string
}

const ProjectCard = styled.li`
    background-size: cover;
    background-position: center;
    transition: 0.3s;

    p{
        filter: drop-shadow(0 0 1rem black);
    }

    :hover{
        scale: 0.95;
    }
`

const Project: React.FC<Props> = ({ img, alt }) => (
    <ProjectCard className="flex-1 relative rounded-xl min-w-[200px] h-[250px] cursor-pointer" style={{ backgroundImage: `url(${img})` }}>
        <a href="/nr">
            <p className='absolute p-4 bottom-0 left-0 text-2xl'>
                {alt}
            </p>
        </a>
    </ProjectCard>
)

export const Projects = () => {
    return (
        <section id="projects">
            <div className='container'>
                <ul className="w-full px-6 lg:px-0 row gap-2">
                    <Project img={NR} alt="A volta para o NR" />
                    <Project img={jetengine} alt="Feira de ciências" />
                    <Project img={money} alt="Milionário em meses" />
                </ul>
            </div>
        </section>
    )
}