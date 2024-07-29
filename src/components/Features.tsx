import React from 'react'
import img1 from '../assets/shapes/Overlay1.png'
import img2 from '../assets/shapes/Overlay2.png'
import img3 from '../assets/shapes/Overlay3.png'
import img4 from '../assets/shapes/Overlay4.png'
import img5 from '../assets/shapes/Overlay5.png'
import img6 from '../assets/shapes/Overlay6.png'

// Import the type StaticImageData
import type { StaticImageData } from 'next/image'

// Adjust the interface to accept StaticImageData
interface Feature {
  icon: StaticImageData
  title: string
  description: string
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: img1,
      title: 'Projetado para Startups',
      description:
        'Nossos serviços são especialmente projetados para atender às necessidades de startups, proporcionando soluções rápidas e eficientes.'
    },
    {
      icon: img2,
      title: 'Design de Alta Qualidade',
      description:
        'Oferecemos designs de alta qualidade que são atraentes e funcionais, otimizados para proporcionar a melhor experiência ao usuário.'
    },
    {
      icon: img3,
      title: 'Todos os Componentes Essenciais',
      description:
        'Incluímos todos os componentes essenciais necessários para o desenvolvimento de sistemas completos e robustos.'
    },
    {
      icon: img4,
      title: 'Otimizado para Velocidade',
      description:
        'Nossas soluções são otimizadas para desempenho, garantindo que seus sistemas funcionem de maneira rápida e eficiente.'
    },
    {
      icon: img5,
      title: 'Totalmente Personalizável',
      description:
        'Oferecemos soluções totalmente personalizáveis para atender às suas necessidades específicas e requisitos únicos.'
    },
    {
      icon: img6,
      title: 'Atualizações Regulares',
      description:
        'Fornecemos atualizações regulares para garantir que seus sistemas estejam sempre atualizados e seguros.'
    }
  ]

  return (
    <section className="min-h-screen bg-[#0B113A] p-10 flex items-center flex-col justify-center">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl">Principais Funcionalidades</h1>
          <p className="text-lg font-medium text-gray-300">
            A FivDevs é composta por cinco programadores dedicados a oferecer
            <br />
            sistemas e soluções voltadas para o desenvolvimento de sistemas.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="card p-5 rounded-lg text-white">
              <img
                src={feature.icon.src}
                alt={`Ícone para ${feature.title}`}
                className="mb-4"
              />
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
