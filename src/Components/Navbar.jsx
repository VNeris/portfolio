import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import Icon from '.../../../assets/astronauto.png'

const links = [
    {
        label: 'Sobre',
        url: '#Sobre'
    },
    {
        label: 'Experiências',
        url: '#Experiências'
    },
    {
        label: 'Projetos',
        url: '#Projetos'
    },
    {
        label: 'Contatos',
        url: '#Contatos'
    },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar items-center text-white backdrop-blur-md bg-primary-200">
            <nav className="flex justify-around py-8 px-5 container sm:px-10">
                <a href="#">
                    <h1 className="shadow-2xl hover:text-[#a46adf] font-serif text-3xl text flex gap-3 items-center">
                        Vini.
                    </h1>
                </a>
                <div className="w-full md:w-auto items-center" id="navbar-default">
                    <ul className="hidden md:flex gap-10 text-xl items-center">
                        {links.map((link, index) => {
                            return (
                                <li key={index} className="items-center hover:text-[#a46adf]">
                                    <a href={link.url}>
                                        {link.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='md:hidden block'>
                    <button onClick={() => setIsOpen(!isOpen)} className="hover:text-amethyst-600 p-2 rounded bg-neutral-800">
                        {isOpen ? <X /> : <Menu className='text-xl' />}
                    </button>
                </div>

                {isOpen &&
                    <div id='menu' className="block md:hidden mx-auto w-11/12 absolute top-20 right-0 left-0 md:px-5 px-3 bg-neutral-900 border-l-4 border-amethyst-600  py-6 rounded-lg">
                        <ul  className="flex flex-col text-xl items-start">
                            {links.map((link, index) => {
                                return (
                                    <li key={index} className="hover:bg-amethyst-600 w-full">
                                        <a href={link.url} onClick={() => setIsOpen(!isOpen)} className="py-4 px-3 block w-full">
                                            {link.label}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </nav>
        </header>
        
    )
}

export default Navbar