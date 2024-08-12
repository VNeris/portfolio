import React from 'react'
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



export const Footer = () => {
  return (
    <section id="Contatos" className="px-5 p-8 bg-black bg-opacity-30 flex w-full justify-around">
        <div className="flex w-full max-w-screen-xl relative gap-5 items-center justify-start flex-col sm:flex-row sm:justify-around">


             {/*CONTATOS*/}

             <ul className="flex justify-around items-center text-xl text-amethyst-600 w-100 gap-5 font-semibold">
                Contatos:

                <li>
                    <a href="https://wa.me/977992725" target='_blank'>
                        <FaWhatsapp className='text-3xl hover:text-amethyst-300'/>
                    </a>
                </li>

                <li>
                    <a href="https://www.facebook.com/viniciusde.paiva.980/" target='_blank'>
                        <FaFacebookF className='text-3xl hover:text-amethyst-300'/>
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/viny_paiv4/" target='_blank'>
                        <FaInstagram className='text-3xl hover:text-amethyst-300'/>
                    </a>
                </li>
                <li>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSGrPdrTBkgqpnbcrBTjNmzWbRBKlQgpHSzsVZCvMRfGDPHDJtFlcHQMNhKLnwNvQkFDq" target='_blank'>
                        <SiGmail className='text-3xl hover:text-amethyst-300'/>
                    </a>
                </li>

            </ul>

                  {/*FOOTER*/}
            <div className=''>
                  <div className="px-9">Copyright © 2024
                    <a href="https://github.com/VNeris/" target="_blank"className="text-amethyst-600 hover:text-amethyst-400 px-2">
                        VNeris.
                    </a>
                    All rights reserved.
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer