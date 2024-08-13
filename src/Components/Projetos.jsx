import React from 'react'
import Spaces from '../assets/spaces-project.png'
import Snake from '../assets/snake-game-project.png'
import Blk from '../assets/blue-lock-blog-project.png'
import Coffe from '../assets/diamond-coffe-project.png'
import Pizza from '../assets/labrava-pizza-project.png'
import Pokedex from '../assets/pokedex-project.png'

export const Projetos = () => {


  return (
    <section id="Projetos" className='"mt-20 px-5 pb-20 pt-40 flex w-full justify-center items-center'>
      <div>

        {/*TITULO*/}

        <div data-aos="fade-up" className="grid grid-col place-content-center">
          <h1 className="text-3xl items-center flex font-semibold justify-center">Projetos</h1>
          <span className="border-b-2 pb-3 max-w-2xl border-amethyst-600 w-80"></span>
        </div>

        {/*PROJETOS*/}

        <div className="grid gap-5 grid-col w-[500px] sm:w-full sm:grid-cols-2 relative p-20">
          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl ">
            <h1 className='flex text-2xl pb-2 items-center justify-center text-amethyst-600 font-bold'>Spaces</h1>
            <a target="_blank" href="https://vneris.github.io/spaces/">
              <img src={Spaces} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3">Utilizando de React, Vite e Tailwind, Website animado sobre novas tecnologias   espaciais. by @VNeris</p>
          </div>

          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <h1 className='flex text-2xl pb-2 items-center justify-center text-amethyst-600 font-bold'>Pokedex</h1>
            <a target="_blank" href="https://vneris.github.io/pokedex/">
              <img src={Pokedex} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3">Utilizando Javascript com integração de uma API, uma pokedex interativa com pokemons animados. by @VNeris
            </p>
          </div>

          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <h1 className='flex text-2xl pb-2 items-center justify-center text-amethyst-600 font-bold'>Snake Game</h1>
            <a target="_blank" href="https://vneris.github.io/Snake-Game/">
              <img src={Snake} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3">Usando Javascript como base, um clássico dos anos 90, o jogo da cobrinha com  interface de pontuação
              <span className='text-amethyst-600'> (movimento da cobra feito apenas com as setas do teclado)</span>. by @VNeris
            </p>
          </div>



          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <h1 className='flex text-2xl pb-2 items-center justify-center text-amethyst-600 font-bold'>Blue lock Blog</h1>
            <a target="_blank" href="https://vneris.github.io/blue-lock-blog/">
              <img src={Blk} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3">Site criado em formato de blog focado no anime japonês Blue Lock, utilizando Bootstrap em diversas páginas. by @VNeris</p>
          </div>


          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <h1 className='flex text-2xl pb-2 items-center justify-center text-amethyst-600 font-bold'>Diamond Coffee</h1>
            <a target="_blank" href="https://vneris.github.io/diamond-coffee/">
              <img src={Coffe} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3">LandingPage de uma cafeteria com shopping e menu, usando a biblioteca do   Bootstrap. by @VNeris</p>
          </div>


          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <h1 className='flex text-2xl pb-2 items-center justify-center text-amethyst-600 font-bold'>Labrava Pizza</h1>
            <a target="_blank" href="https://vneris.github.io/labrava-pizzaria/">
              <img src={Pizza} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3">LandingPage de uma Pizzaria com shopping e serviços, usando apenas HTML5 + CSS3 + Javascript. by @VNeris</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projetos