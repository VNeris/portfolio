import React from 'react'
import Eu from "../assets/IMG-20230128-WA0015.jpg"

export const Sobre = () => {
	const age = function calculate_age(age) {
        var diff_ms = Date.now() - age.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

	return (
		<section id="Sobre" className="Sobre mt-20 px-5 pb-32 pt-40 bg-black bg-opacity-30 flex w-full justify-center">
			<div className="flex w-full max-w-screen-xl relative gap-5 items-center">

			{/*IMAGEM COM BORDA*/}

				<div data-aos="fade-right" className="relative sm:flex items-center justify-center hidden">
					<img className="eu max-w-full h-auto rounded-md lg:w-[150rem] xl:w-[100rem] md:w-[200rem]" src={Eu} alt="" />
				</div>


			{/*SOBRE, TEXTOS E LINKS*/}



				<div className="flex flex-col px-5 max-w-3xl">
					<h1 data-aos="fade-up" className="text-3xl items-center flex font-semibold">Sobre</h1>
					<span data-aos="fade-up" className="border-b-2 pb-3 border-amethyst-600"></span>
					<p data-aos="fade-up" className="text-lg mt-3 font-sans"> Sou um desenvolvedor front-end com uma paixão por criar interfaces de usuário modernas e responsivas. Com uma sólida base em HTML, CSS e JavaScript, tenho experiência em construir sites e aplicações web que oferecem uma experiência de usuário intuitiva e eficiente. Minha jornada na programação começou há 1 ano, e desde então, tenho me dedicado a aprender e aplicar as melhores práticas de desenvolvimento front-end.</p>
					<div className="flex flex-col gap-5 mt-8">
						<h3 data-aos="fade-up" className='font-semibold font-sans text-amethyst-600'>CONTATO:
							<span className="text-lg font-normal text-white px-2"> (11) 97799 - 2725</span>
						</h3>
						<h3 data-aos="fade-up" className='font-semibold font-sans text-amethyst-600'>LOCAL:
							<span className="text-lg font-normal text-white px-2"> São Paulo, BR</span>
						</h3>
						<h3 data-aos="fade-up" className='font-semibold font-sans text-amethyst-600'>IDADE:
							<span className="text-lg font-normal text-white px-2"> {age(new Date(2003, 6, 3))}</span>
						</h3>
						<h3 data-aos="fade-up" className='font-semibold font-sans text-amethyst-600'>EMAIL:
							<span className="text-lg font-normal text-white px-2">
								<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSSvtqtQvCWbVRdzwDCZxdBVkKhFPvLjDkVsCBcBgzjMkgQGFGRwskFtLLcTTBgfMdjWS" target='_blank'>vinipaiva50@gmail.com</a>
							</span>
						</h3>
					</div>
				</div>



			</div>
		</section>
	)
}

export default Sobre