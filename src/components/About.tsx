import React from 'react'
import check from '../assets/img/cheked.png'
import img from '../assets/img/about-image.svg.png'
import img1 from '../assets/img/about-image-2.svg.png'
import { motion } from 'framer-motion'

export default function About() {
  // Definindo variantes para animações
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section
      className="min-h-screen bg-[#090E34] p-10 flex items-center flex-col justify-center relative"
      id="sobre"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 p-10 border-b border-blue-950">
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-4xl mb-2">
            Desenvolvido para Startups, SaaS e <br /> Empresas
          </h1>
          <p className="text-lg font-medium text-gray-400 mb-6">
            Nosso objetivo é proteger suas aplicações empresariais com soluções
            de alta qualidade e discussões interativas para segurança
            aprimorada.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Qualidade premium',
              'Sem necessidade de código',
              'Uso vitalício',
              'Atualizações regulares',
              'Documentação rica',
              'Amigável para desenvolvedores'
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={check.src} alt={text} />
                <p className="text-lg font-medium text-gray-400">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          transition={{ duration: 0.8 }}
        >
          <img src={img.src} alt="Sobre" className="rounded-lg shadow-lg" />
        </motion.div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 p-10">
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          transition={{ duration: 0.8 }}
        >
          <img src={img1.src} alt="Sobre" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
