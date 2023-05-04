import styled from 'styled-components'
import Mongodb from '../../assets/mongodb/MongoDB_ForestGreen.svg'

const Card = styled.article`
    background: linear-gradient(333deg, rgb(64 183 87) 0%, rgb(133 255 165) 100%);
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

export const MongodbCard = () => {
    return (
        <Card className='noise-panel flex flex-col min-w-0 text-gray-600 shadow-black shadow-md'>
            <a href="https://www.mongodb.com/" target='_blank' className='flex flex-col gap-6 p-6 text-left'>
                <aside>
                    <code>Easy to use</code>
                </aside>
                <img src={Mongodb} alt="MongoDB" className='mx-16' />
                <div className="flex grid-cols-2 flex-col justify-center gap-5 lg:grid">
                    <h2 className="heading-3 text-gray-700">
                        Bring all your<br />data
                    </h2>
                    <p className="body mt-2 text-gray-700">
                        The developer data platform that provides the services and tools necessary to build distributed applications fast, at the performance and scale users demand.
                        <br /><code className="rounded-sm bg-white/20 py-0.5 px-1.5">db.users.find({ })</code>.
                    </p>
                </div>
            </a>
        </Card >
    )
}