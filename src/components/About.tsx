import React from 'react'
import check from '../assets/img/cheked.png'
import img from '../assets/img/about-image.svg.png'
import img1 from '../assets/img/about-image-2.svg.png'

export default function About() {
  return (
    <section className="min-h-screen bg-[#090E34] p-10 flex items-center flex-col justify-center relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 p-10 border-b border-blue-950">
        <div className="text-center md:text-left">
          <h1 className="text-white text-5xl mb-2">
            Desenvolvido para Startups, SaaS e <br /> Sites Empresariais.
          </h1>
          <p className="text-lg font-medium text-gray-400 mb-6">
            O principal objetivo é focar em educar os participantes sobre como{' '}
            <br />
            proteger da melhor maneira as aplicações empresariais altamente
            <br />
            vulneráveis, com discussões interativas em painéis e mesas redondas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Check" />
              <p className="text-lg font-medium text-gray-400">
                Qualidade premium
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Check" />
              <p className="text-lg font-medium text-gray-400">
                Sem necessidade de código
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Check" />
              <p className="text-lg font-medium text-gray-400">Uso vitalício</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Check" />
              <p className="text-lg font-medium text-gray-400">
                Atualizações regulares
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Check" />
              <p className="text-lg font-medium text-gray-400">
                Documentação rica
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Check" />
              <p className="text-lg font-medium text-gray-400">
                Amigável para desenvolvedores
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={img.src} alt="Sobre" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 p-10 ">
        <div className="flex justify-center">
          <img src={img1.src} alt="Sobre" className="rounded-lg shadow-lg" />
        </div>

        <div className="text-center md:text-left">
          <div className="">
            <h1 className="text-2xl text-white">Bug free code</h1>
            <p className="text-lg text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl text-white">Premier support</h1>
            <p className="text-lg text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl text-white">Regular updates</h1>
            <p className="text-lg text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
