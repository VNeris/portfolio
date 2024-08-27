  import React from 'react'
import { FaReact, FaGithub, FaBootstrap, FaFigma, FaNodeJs, FaWordpress  } from "react-icons/fa";
  import { RiTailwindCssFill } from "react-icons/ri";
  import { SiJquery, SiAdobeaftereffects } from "react-icons/si";
  import { IoLogoJavascript } from "react-icons/io5";
  import { FaGitAlt } from "react-icons/fa6";
  import { TbBrandVite } from "react-icons/tb";








  export const Experiências = () => {
    
      {/*CONST RETORNANDO ICONS*/}


  const tec = [
      {
          label: <FaReact/>,
          text: 'React.js',
          color: '#39C1D7'
      },
      {
          label: <FaGitAlt/>,
          text: 'Git',
          color: "#F4511E"
      },
      {
          label: <FaGithub/>,
          text: 'Github',
          color: '#000000'
      },
      {
          label: <FaBootstrap/>,
          text:'Bootstrap',
          color:'#9C55D4'
      },
      {
          label: <FaFigma/>,
          text:'Figma',
          color: '#E64A19'
      },
      {
          label: <FaNodeJs/>,
          text: 'Node.Js',
          color: '#21A366'
      },
      {
          label: <TbBrandVite />,
          text: 'Vite.js',
          color:'#9231BE'
      },
      {
          label: <RiTailwindCssFill/>,
          text: 'Tailwind',
          color:'#00ACC1'
      },
      {
          label: <IoLogoJavascript/>,
          text: 'Javascript',
          color:'#F7DF1E'
      },
      {
        label: <SiJquery/>,
        text: 'Jquery',
        color: '#1266A9'
      },
      {
        label: <SiAdobeaftereffects/>,
        text: 'After Effects',
        color: '#5C1D9C'
      },
    {
      label: <FaWordpress />,
      text: 'WordPress',
      color: '#01579B'
    },
  ]

      return (


    <section id='Experiências' className="mt-20 xl:px-5 md:px-20 pb-20 pt-40 flex w-full justify-center items-center">
        <div className="w-full max-w-screen-xl relative grid lg:grid-cols-3 grid-cols-1 gap-10">

        {/*EXPERIÊNCIAS*/}


            <div data-aos="fade-up-right" className="flex flex-col px-5 lg:col-span-2">
              <h1 className="text-3xl items-center flex font-semibold">Experiências</h1>
              <span className="border-b-2 pb-3 border-amethyst-600"></span>
                <p className="text-lg mt-8 font-sans">Além de minhas habilidades técnicas, sou proativo e sempre em busca de novos desafios que me permitam crescer como desenvolvedor. Gosto de colaborar em equipe e acredito na importância de uma comunicação clara e eficaz. Estou constantemente explorando novas tecnologias e tendências do setor para aprimorar minhas habilidades e oferecer soluções inovadoras.</p>
              <div className='mt-2'>
                <h2 className="text-xl text-amethyst-600 flex flex-col sm:flex-row items-center mt-10 font-semibold">Auxiliar de Reposição:
                  <p className='text-base text-white px-2 font-normal'>Dufry 09/22 | 12/22</p>
                </h2>
                <h2 className="text-xl text-amethyst-600 flex flex-col sm:flex-row items-center mt-10 font-semibold">Vendedor:
                   <p className='text-base text-white px-2 font-normal'>Dubai 02/23 | 06/23</p>
                </h2>
                <h2 className="text-xl text-amethyst-600 flex flex-col sm:flex-row items-center mt-10 font-semibold">Auxiliar de Produção:
                   <p className='text-base text-white px-2 font-normal'>Brystol 08/23 | 01/24</p>
                </h2>
              </div>


              {/* CURSOS*/}

               <h2 className="text-3xl mt-10 items-center flex font-semibold">Cursos</h2>
              <span className="border-b-2 pb-3 border-amethyst-600"></span>
              <div className="grid grid-cols-1">
                <h2 className="text-xl text-amethyst-600 flex flex-col sm:flex-row items-center mt-10 font-bold">Inglês:
                  <p className='text-base text-white px-2 font-normal'>CNA 01/19 | 01/20</p>
                </h2>
                <h2 className="text-xl text-amethyst-600 flex flex-col sm:flex-row items-center mt-10 font-bold">Programação:
                  <p className='text-base text-white px-2 font-normal items-center '>RocketSeat 01/24 | 06/24</p>
                </h2>
                <h2 className="text-xl text-amethyst-600 flex flex-col sm:flex-row items-center mt-10 font-bold">Design:
                  <p className='text-base text-white px-2 font-normal'>Udemy 01/22 | 01/23</p>
                </h2>
                <h2 className="text-xl text-amethyst-600 flex flex-col sm:flex-row items-center mt-10 font-bold">Marketing-Digital:
                  <p className='text-base text-white px-2 font-normal'>Udemy 02/22 | 07/22</p>
                </h2>
                <h2 className="text-xl text-amethyst-600 flex flex-col sm:flex-row items-center mt-10 font-bold">Informática:
                  <p className='text-base flex text-white px-2 font-normal'>Logus 01/16 | 01/17</p>
                </h2>
              </div>             
          </div>  

            {/* SKILLS AND ICONS*/}
            
            <div data-aos="fade-up-left" className='px-5'>
                <h1 className="border-b-2 pb-3 text-3xl items-center flex font-semibold border-amethyst-600">Skills</h1>
                <aside data-aos="zoom-in" className="grid lg:grid-cols-2 sm:grid-cols-3 grid-cols-2 gap-5 gap-y-10 mt-20">
                {tec.map((tec, index) => {
                    return (
                        <div key={index} style={{color:tec.color}} className='text-5xl animate-bounce cursor-default text-amethyst-600 flex flex-col items-center gap-4'>
                          {tec.label}
                          <p className='text-white text-lg items-center justify-center flex'>{tec.text}</p>
                        </div>
                          )
                        })}
                </aside>
           </div>


        </div>
    </section>
    )
  }

  export default Experiências