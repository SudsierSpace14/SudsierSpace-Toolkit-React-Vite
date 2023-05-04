import { Sud, Item, Nav } from "./styles"

export const Navbar = () => {
    return (
        <Nav className="font-JetBrains h-24 w-full bg-gray-800 drop-shadow-2xl shadow-gray-800 shadow">
            <div className="container flex justify-center md:justify-between items-center h-full px-8">
                <Sud className='text-3xl font-Poltawski z-10'>
                    <a href='/'>SudsierSpace</a>
                    <p className='font-JetBrains text-[0.8em]'>Toolkit</p>
                </Sud>
                <ul className='md:flex gap-4 hidden'>
                    <Item><a href="#">Works</a></Item>
                    <Item><a href="#">Platforms</a></Item>
                    <Item><a href="#">Talk with me</a></Item>
                </ul>
            </div>
        </Nav>
    )
}