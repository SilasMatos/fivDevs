import React from 'react'
import check from '../assets/img/cheked.png'
import img from '../assets/img/about-image.svg.png'
import img1 from '../assets/img/about-image-2.svg.png'

export default function About() {
  return (
    <section className="min-h-screen bg-[#090E34] p-10 flex items-center flex-col justify-center relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 p-10 border-b border-blue-950">
        <div className="text-center md:text-left">
          <h1 className="text-white text-4xl mb-2">
            Desenvolvido para Startups, SaaS e <br /> Empresas
          </h1>
          <p className="text-lg font-medium text-gray-400 mb-6">
            Nosso objetivo é proteger suas aplicações empresariais com soluções
            de alta qualidade e discussões interativas para segurança
            aprimorada.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Qualidade premium" />
              <p className="text-lg font-medium text-gray-400">
                Qualidade premium
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Sem necessidade de código" />
              <p className="text-lg font-medium text-gray-400">
                Sem necessidade de código
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Uso vitalício" />
              <p className="text-lg font-medium text-gray-400">Uso vitalício</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Atualizações regulares" />
              <p className="text-lg font-medium text-gray-400">
                Atualizações regulares
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Documentação rica" />
              <p className="text-lg font-medium text-gray-400">
                Documentação rica
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check.src} alt="Amigável para desenvolvedores" />
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
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 p-10">
        <div className="flex justify-center">
          <img src={img1.src} alt="Sobre" className="rounded-lg shadow-lg" />
        </div>
        <div className="text-center md:text-left">
          <div className="mb-4">
            <h1 className="text-2xl text-white">Código sem bugs</h1>
            <p className="text-lg text-gray-400">
              Garantimos código limpo e eficiente, minimizando riscos e
              melhorando a performance.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl text-white">Suporte premium</h1>
            <p className="text-lg text-gray-400">
              Oferecemos suporte contínuo para garantir a melhor experiência
              possível.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl text-white">Atualizações regulares</h1>
            <p className="text-lg text-gray-400">
              Mantemos seus sistemas atualizados com as últimas tecnologias e
              melhorias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
