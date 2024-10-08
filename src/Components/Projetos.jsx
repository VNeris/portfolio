import React from 'react'


import Spaces from '../assets/spaces-project.png'
import Snake from '../assets/snake-game-project.png'
import Blk from '../assets/blue-lock-blog-project.png'
import Coffe from '../assets/diamond-coffe-project.png'
import Pizza from '../assets/labrava-pizza-project.png'
import Pokedex from '../assets/pokedex-project.png'
import Carrinho from '../assets/carrinho-de-compras-project.png'
import Mingo from '../assets/mingo-project.png'
import Yugi from '../assets/yugioh-databook-project.png'


import { CiLink } from "react-icons/ci";


export const Projetos = () => {

  const styles = {

    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingBottom: '8px',
    },
    text: {
      color: '#904ecf',
      fontSize: '24px',
      lineHeight: '2rem',
      textAlign: 'center',
      fontWeight: 600,
      flexGrow: 1, // Faz o texto ocupar o espaço restante
      
    },
    icon: {
      fontSize: '3rem',
      marginRight: '10px', 
      marginLeft: '-60px',// Adiciona um espaço entre o texto e o ícone
    },
  };



  return (
    <section id="Projetos" className='"mt-20 px-5 pb-20 pt-40 flex w-full justify-center items-center'>
      <div>

        {/*TITULO*/}

        <div data-aos="fade-up" className="grid grid-col place-content-center">
          <h1 className="text-3xl items-center flex font-semibold justify-center">Projetos</h1>
          <span className="border-b-2 pb-3 max-w-2xl border-amethyst-600 w-80"></span>
        </div>




        {/*PROJETOS*/}

        

        <div className="grid gap-5 grid-col w-[500px] sm:w-full lg:grid-cols-2 relative p-20">

          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <div style={styles.container}>
              <h1 style={styles.text} className=' underline'>DashBoard Doflamingo</h1>
              <a href="https://doflamingo-dashboard.vercel.app/"  className="hidden sm:flex" target="_blank">
                <CiLink style={styles.icon} className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
                </a>
            </div>
            <a target="_blank" href="https://doflamingo-dashboard.vercel.app/">
              <img src={Mingo} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3"> A dashboard Doflamingo está em desenvolvimento, focando em criar uma interface centralizada e intuitiva para monitoramento de métricas em tempo real e geração de relatórios personalizados para seus produtos. By @VNeris</p>
          </div>



          
          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <div style={styles.container}>
              <h1 style={styles.text}>Yu-Gi-Oh! Databook</h1>
              <a href="https://databook-yugioh.vercel.app/" className="hidden sm:flex" target="_blank">
                <CiLink style={styles.icon}  className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
              </a>
            </div>
            <a target="_blank" href="https://databook-yugioh.vercel.app/">
              <img src={Yugi} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
              <p className="mt-5 border border-amethyst-800 rounded-xl flex p-3"> Este projeto visa criar um Databook de cartas Yu-Gi-Oh! Ele permite que os usuários pesquisem e filtrem cartas de diversos tipos (monstros, magias, armadilhas, etc.), proporcionando uma experiência interativa para os fãs do jogo. By @VNeris
              </p>
          </div>



          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <div style={styles.container}>
              <h1 style={styles.text}>Carrinho de Compras</h1>
              <a href="https://carrinho-de-compras-taupe-three.vercel.app/" className="hidden sm:flex"  target="_blank">
                <CiLink style={styles.icon}  className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
              </a>
            </div>
            <a target="_blank" href="https://carrinho-de-compras-taupe-three.vercel.app/">
              <img src={Carrinho} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3"> Este é um projeto de carrinho de compras desenvolvido com React JS. Ele permite listar produtos na tela, buscar produtos consumindo a API do Mercado Livre, adicionar produtos e remover produtos do carrinho. By @VNeris</p>
          </div>




          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl ">
            <div style={styles.container}>
              <h1 style={styles.text}>Spaces</h1>
              <a href="https://vneris.github.io/spaces/" className="hidden sm:flex" target="_blank">
                <CiLink style={styles.icon} className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
              </a>
            </div>
            <a target="_blank" href="https://vneris.github.io/spaces/">
              <img src={Spaces} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3"> Explore o futuro da exploração espacial com nosso site interativo, criado com React, Vite e Tailwind CSS. Mergulhe em inovações espaciais com uma experiência de design moderno, desempenho rápido e animações envolventes. By @VNeris.</p>
          </div>





          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <div style={styles.container}>
              <h1 style={styles.text}>Pokedex</h1>
              <a href="https://vneris.github.io/pokedex/" className="hidden sm:flex" target="_blank">
                <CiLink style={styles.icon}  className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
              </a>
            </div>
            <a target="_blank" href="https://vneris.github.io/pokedex/">
              <img src={Pokedex} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3"> Explore uma Pokédex interativa criada com JavaScript e integração com uma API, com Pokémons animados. Oferecendo uma experiência visual envolvente e dinâmica. by @VNeris
            </p>
          </div>




          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <div style={styles.container}>
              <h1 style={styles.text}>Snake Game</h1>
              <a href="https://vneris.github.io/Snake-Game/" className="hidden sm:flex"  target="_blank">
                <CiLink style={styles.icon}  className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
             </a>
            </div>
            <a target="_blank" href="https://vneris.github.io/Snake-Game/">
              <img src={Snake} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3"> Reviva o clássico dos anos 90 com uma recriação do jogo da cobrinha, desenvolvido em JavaScript. Com uma interface de pontuação e <span className='text-amethyst-600'>controle de movimento apenas pelas setas do teclado</span>, oferecendo uma experiência nostálgica e divertida. by @VNeris
            </p>
          </div>




          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <div style={styles.container}>
              <h1 style={styles.text}>Blue lock Blog</h1>
              <a href="https://vneris.github.io/blue-lock-blog/" className="hidden sm:flex" target="_blank">
                <CiLink style={styles.icon}  className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
              </a>
            </div>
            <a target="_blank" href="https://vneris.github.io/blue-lock-blog/">
              <img src={Blk} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3"> Este site em formato de blog utiliza Bootstrap para criar uma experiência responsiva e estilizada em diversas páginas HTML5. Focado no anime japonês Blue Lock, oferece um design moderno e acessível para fãs e seguidores. by @VNeris</p>
          </div>





          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <div style={styles.container}>
              <h1 style={styles.text}>Diamond Coffee</h1>
              <a href="https://vneris.github.io/diamond-coffee/" className="hidden sm:flex" target="_blank">
                <CiLink style={styles.icon}  className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
              </a>
            </div>
            <a target="_blank" href="https://vneris.github.io/diamond-coffee/">
              <img src={Coffe} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3"> Esta Landing Page para uma cafeteria utiliza a biblioteca Bootstrap para criar um design moderno e responsivo. Inclui seções de shopping e menu, proporcionando uma experiência visualmente atraente e funcional para visitantes e clientes. by @VNeris</p>
          </div>





          <div data-aos="zoom-out" data-aos-duration="1300" className="bg-black bg-opacity-30 p-5 rounded-xl">
            <div style={styles.container}>
              <h1 style={styles.text}>LaBrava Pizzaria</h1>
              <a target="_blank" href="https://vneris.github.io/labrava-pizzaria/" className="hidden sm:flex">
                <CiLink style={styles.icon}  className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
              </a>
            </div>
              <a target="_blank" href="https://vneris.github.io/labrava-pizzaria/">
              <img src={Pizza} className="max-w-full h-auto border border-amethyst-800  rounded-xl" alt="" />
            </a>
            <p className="mt-5 border border-amethyst-800 rounded-xl p-3"> Esta Landing Page para uma pizzaria utiliza HTML5, CSS3 e JavaScript para oferecer uma experiência interativa e estilizada. Inclui seções de shopping e serviços, proporcionando uma navegação intuitiva e visualmente atraente para clientes. by @VNeris</p>
          </div>




        </div>
      </div>
    </section>
  )
}

export default Projetos