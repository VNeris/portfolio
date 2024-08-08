import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import CV from '../assets/Vinicius Neris CV.pdf'




export const Presentation = () => {
  return (
 <section className=''>
    <main className='px-5 xl:gap-20 md:gap-10 lg:gap-5 container sm:flex w-100 pt-20'>

      {/*TEXTO APRESENTAÇÃO*/}

        <div className="flex justify-center items-center">
                <div data-aos="fade-right" data-aos-duration="1500" className="wrapper relative xl:text-3xl text-2xl ps-5 flex flex-col text-[#a46adf] gap-y-2 tracking-wide">Olá, sou 
                    <span className="xl:text-7xl text-6xl text-white shadow-xl shadow-primary-200 font-semibold z-10">Vinicius Neris.</span>
                    <ul className='dynamic-texts text-white text-4xl z-0'>
                      <li>
                        <span>
                          Front-end Development
                        </span>
                      </li>
                      <li className="design">
                        <span>
                          UI Designer
                        </span>
                      </li>
                      <li>
                        <span>
                          Digital Marketing Analyst
                        </span>
                      </li>
                    </ul>
                    <div className='flex xl:gap-10 gap-7 items-center z-10'>
                        <a className="cursor-pointer" target="_blank" href="https://github.com/VNeris">
                            <FaGithubAlt className="xl:text-5xl text-4xl hover:text-amethyst-300 mt-2 rounded-full p-2 bg-black bg-opacity-10"></FaGithubAlt>
                        </a>
                        <a className="cursor-pointer" target="_blank" href="https://www.linkedin.com/in/vinicius-paiva-b49b602b6/">
                            <TiSocialLinkedin className="xl:text-5xl text-4xl hover:text-amethyst-300 mt-2 rounded-full p-1 bg-black bg-opacity-10"></TiSocialLinkedin>
                        </a>
                        <a className="cursor-pointer" href="https://wa.me/977992725" target="_blank">
                            <FaWhatsapp className="xl:text-5xl text-4xl mt-2 hover:text-amethyst-300 rounded-full p-2 bg-black bg-opacity-10"/>
                        </a>
                        <a href={CV} target="_blank">
                          <button className="rounded-full outline outline-offset-2 outline-amethyst-800 hover:outline-amethyst-500 drop-shadow-brilho-escuro hover:drop-shadow-brilho hover:bg-amethyst-600 text-white lg:text-xl lg:p-1 w-12 lg:w-20 text-xl xl:w-24 p-1 mt-2 bg-amethyst-900">CV</button>
                        </a>
                    </div>
                </div>
          </div>


        {/*ANIMAÇÃO DE APRESENTAÇÃO */}


          <div data-aos="zoom-in" data-aos-duration="1500" className="container">
            <div className="animation flex justify-center items-center z-10 opacity-50 lg:opacity-100">
              <div className="pulse animate-pulse-slow">
                <span style={{"--i":1}}></span>
                <span style={{"--i":2}}></span>
                <span style={{"--i":3}}></span>
                <span style={{"--i":4}}></span>
            </div>
          </div>
        </div>
    </main>
 </section>
  )
}
export default Presentation