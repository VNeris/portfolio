import React from "react";

import { SiAltiumdesigner } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { IoCodeSlashOutline } from "react-icons/io5";
import { AiOutlineSolution } from "react-icons/ai";
import { AiOutlineSignature } from "react-icons/ai";
import { BiGame } from "react-icons/bi";







export const Services = () => {


    return (
        <section id="Services" className='flex flex-col mt-20 px-5 pt-40 w-full justify-center items-center'>

            <div>
                <div data-aos="fade-dowm" className="grid grid-col place-content-center">
                <h1 className="text-3xl items-center flex font-semibold justify-center">Serviços</h1>
                <span className="border-b-2 pb-3 max-w-2xl border-amethyst-600 w-80"></span>
                </div>
            </div>
            

        <div className="grid gap-5 grid-col w-[500px] sm:w-full lg:grid-cols-2 xl:grid-cols-3 relative p-20">

        <div data-aos="fade-left" data-aos-duration="800" className="p-10 bg-black bg-opacity-20 border hover:scale-105 ease-linear hover:shadow-xl shadow-black border-amethyst-400 h-40 items-center flex justify-center">
                <div className="flex flex-col items-start text-wrap max-w-full h-auto"> 
                    <div className="flex items-center justify-center w-full">
                        <SiAltiumdesigner className="text-5xl m-2 bg-amethyst-500 rounded-full p-2"/>
                        <h4 className="text-xl text-left">UI/UX Design</h4>
                    </div>
                    <p className="sm:text-base col-span-2 text-sm">Para que o usuário tenha uma melhor experiência do sistema web.</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="p-10 bg-black bg-opacity-20 border border-amethyst-400 h-40 hover:scale-105 ease-linear hover:shadow-xl shadow-black items-center flex justify-center">
                <div className="flex flex-col items-start text-wrap"> 
                    <div className="flex items-center justify-center w-full">
                        <CgWebsite className="text-5xl m-2 bg-amethyst-500 rounded-full p-2"/>
                        <h4 className="text-xl text-left">Web Design</h4>
                    </div>
                    <p className="sm:text-base col-span-2 text-sm">Criação de layouts de sites atraente, objetivo e responsivo.</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1300" className="p-10 bg-black bg-opacity-20 border border-amethyst-400 hover:scale-105 ease-linear hover:shadow-xl shadow-black h-40 items-center flex justify-center">
                <div className="flex flex-col items-start text-wrap"> 
                    <div className="flex items-center justify-center w-full">
                        <IoCodeSlashOutline  className="text-5xl m-2 bg-amethyst-500 rounded-full p-2"/>
                        <h4 className="text-xl text-left">Desenvolvimento de Sites</h4>
                    </div>
                    <p className="sm:text-base col-span-2 text-sm">Desenvolvo siter profissionais, landing pages, portfólios e hotsites.</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1500" className="p-10 bg-black bg-opacity-20 border border-amethyst-400 hover:scale-105 ease-linear hover:shadow-xl shadow-black h-40 items-center flex justify-center">
                <div className="flex flex-col items-start text-wrap"> 
                    <div className="flex items-center justify-center w-full">
                        <AiOutlineSolution  className="text-5xl m-2 bg-amethyst-500 rounded-full p-2"/>
                        <h4 className="text-xl text-left">E-mail Marketing</h4>
                    </div>
                    <p className="sm:text-base col-span-2 text-sm">Criação de campanhas de e-mail atrativas, com foco em engajamento e conversões.</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1800" className="p-10 bg-black bg-opacity-20 border border-amethyst-400 hover:scale-105 ease-linear hover:shadow-xl shadow-black h-40 items-center flex justify-center">
                <div className="flex flex-col items-start text-wrap"> 
                    <div className="flex items-center justify-center w-full">
                        <AiOutlineSignature  className="text-5xl m-2 bg-amethyst-500 rounded-full p-2"/>
                        <h4 className="text-xl text-left">Assinaturas de e-mail</h4>
                    </div>
                    <p className="sm:text-base col-span-2 text-sm">Desenvolvimento de Assinaturas personalizadas, profissionais e compatíveis com diferentes plataformas.</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="p-10  bg-black bg-opacity-20 border border-amethyst-400 hover:scale-105 ease-linear hover:shadow-xl shadow-black h-40 items-center flex justify-center">
                <div className="flex flex-col items-start text-wrap"> 
                    <div className="flex items-center justify-center w-full">
                        <BiGame  className="text-5xl m-2 bg-amethyst-500 rounded-full p-2"/>
                        <h4 className="text-xl text-left">Jogos para Ativação</h4>
                    </div>
                    <p className="sm:text-base col-span-2 text-sm">Crio interações que transmitem o tema do evento, além de chamarem a atenção do usuário.</p>
                </div>
            </div>




        </div>

            
        </section>
    )
}

export default Services