import React, { useState } from "react";
import { CiLink } from "react-icons/ci"; // Ícone de link (você pode usar o que preferir)


import Spaces from '../assets/spaces-project.png'
import Snake from '../assets/snake-game-project.png'
import Blk from '../assets/blue-lock-blog-project.png'
import Coffe from '../assets/diamond-coffe-project.png'
import Pizza from '../assets/labrava-pizza-project.png'
import Pokedex from '../assets/pokedex-project.png'
import Carrinho from '../assets/carrinho-de-compras-project.png'
import Weather from '../assets/weather-app.png'
import Yugi from '../assets/yugioh-databook-project.png'



const Carousel = () => {
    // Estado para controle do índice do slide
    const [currentIndex, setCurrentIndex] = useState(0);


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
    
  
    const cards = [
      {
        title: "Yu-Gi-Oh! Databook",
        description: "Este projeto visa criar um Databook de cartas Yu-Gi-Oh! Ele permite que os usuários pesquisem e filtrem cartas de diversos tipos (monstros, magias, armadilhas, etc.), proporcionando uma experiência interativa para os fãs do jogo.",
        link: "https://databook-yugioh.vercel.app/",
        imgSrc: Yugi,
        extraLink: "https://databook-yugioh.vercel.app/"
      },
      {
        title: "Blue Lock Blog",
        description: "Este site em formato de blog utiliza Bootstrap para criar uma experiência responsiva e estilizada em diversas páginas HTML5. Focado no anime japonês Blue Lock, oferece um design moderno e acessível para fãs e seguidores.",
        link: "https://vneris.github.io/blue-lock-blog/",
        imgSrc: Blk, 
        extraLink: "https://vneris.github.io/blue-lock-blog/"
      },
      {
        title: "Spaces",
        description: "Explore o futuro da exploração espacial com nosso site interativo, criado com React, Vite e Tailwind CSS. Mergulhe em inovações espaciais com uma experiência de design moderno, desempenho rápido e animações envolventes.",
        link: "https://vneris.github.io/spaces/",
        imgSrc: Spaces,
        extraLink: "https://vneris.github.io/spaces/"
      },
      {
        title: "Pokedex",
        description: "Explore uma Pokédex interativa criada com JavaScript e integração com uma API, com Pokémons animados. Oferecendo uma experiência visual envolvente e dinâmica.",
        link: "https://vneris.github.io/pokedex/",
        imgSrc: Pokedex,
        extraLink: "https://vneris.github.io/pokedex/",
      },
      {
        title: "Snake Game",
        description: "Reviva o clássico dos anos 90 com uma recriação do jogo da cobrinha, desenvolvido em JavaScript. Com uma interface de pontuação e controle de movimento apenas pelas setas do teclado, oferecendo uma experiência nostálgica e divertida.",
        link: "https://vneris.github.io/Snake-Game/",
        imgSrc: Snake,
        extraLink: "https://vneris.github.io/Snake-Game/",
      },
      {
        title: "Weather App",
        description: "Aplicativo simples e eficiente que fornece dados meteorológicos em tempo real, incluindo temperatura, umidade, velocidade do vento e outras condições climáticas, com base na sua localização ou qualquer cidade ao redor do mundo.",
        link: "https://weather-app-khaki-omega-71.vercel.app/",
        imgSrc: Weather,
        extraLink: "https://weather-app-khaki-omega-71.vercel.app/",
      },
      {
        title: "LaBrava Pizzaria",
        description: "Esta Landing Page para uma pizzaria utiliza HTML5, CSS3 e JavaScript para oferecer uma experiência interativa e estilizada. Inclui seções de shopping e serviços, proporcionando uma navegação intuitiva e visualmente atraente para clientes.",
        link: "https://vneris.github.io/labrava-pizzaria/",
        imgSrc: Pizza,
        extraLink: "https://vneris.github.io/labrava-pizzaria/",
      },
      {
        title: "Carrinho de Compras",
        description: "Este é um projeto de carrinho de compras desenvolvido com React JS. Ele permite listar produtos na tela, buscar produtos consumindo a API do Mercado Livre, adicionar produtos e remover produtos do carrinho.",
        link: "https://carrinho-de-compras-taupe-three.vercel.app/",
        imgSrc: Carrinho,
        extraLink: "https://carrinho-de-compras-taupe-three.vercel.app/",
      },
     
      // Adicione mais objetos conforme necessário
    ];
  
    // Funções para mover entre os slides (de 2 em 2)
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 2 + cards.length) % cards.length
      );
    };
  
    return (

        <section id="Projetos">

             {/*TITULO*/}

        <div data-aos="fade-up" className="grid grid-col place-content-center">
          <h1 className="text-3xl items-center flex font-semibold justify-center">Projetos</h1>
          <span className="border-b-2 pb-3 max-w-2xl border-amethyst-600 w-80"></span>
        </div>




        {/*PROJETOS*/}

        <div className="relative p-20" >

          {/* Container do carrossel */}

          <div data-aos="zoom-out" data-aos-duration="1300" className="flex transition-all duration-1000 ease-in-out items-stretch">

            {/* Exibir 2 slides por vez */}
            
            {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
              <div key={index} className="flex justify-center items-center w-full px-2 h-full">
                <div className="bg-black bg-opacity-30 p-5 rounded-xl flex flex-col ">
                  <div style={styles.container}>
                    <h1 style={styles.text}>{card.title}</h1>
                    <a href={card.extraLink} className="hidden sm:flex" target="_blank" rel="noopener noreferrer">
                      <CiLink style={styles.icon} className="hover:bg-amethyst-800 rounded-full text-amethyst-600 hover:text-white p-2" />
                    </a>
                  </div>
                  <a target="_blank" href={card.link} rel="noopener noreferrer">
                    <img src={card.imgSrc} className="max-w-full h-auto border border-amethyst-800 rounded-xl" alt="" />
                  </a>
                  <p className="mt-5 border border-amethyst-800 rounded-xl p-3">
                    {card.description} By @VNeris
                  </p>
                </div>
              </div>
            ))}
          </div>
    
          {/* Botões de navegação */}
          <div data-aos="zoom-out" data-aos-duration="1300" className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-5">
            <button onClick={prevSlide} className="bg-black text-white rounded-full p-5 hover:bg-gray-700">
              {"<"}
            </button>
            <button onClick={nextSlide} className="bg-black text-white rounded-full p-5 hover:bg-gray-700">
              {">"}
            </button>
          </div>
        </div>
        </section>
      );
    };
  
  export default Carousel;