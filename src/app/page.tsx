'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import Image from 'next/image'
import { IoIosSend } from 'react-icons/io'
import Footer from '@/components/Footer'
import img from '../assets/img/techny-business-analytics-on-tablet-screen.gif'
import MyTeam from '@/components/MyTeam'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Home() {
  // Definindo as variantes para as animações
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  useEffect(() => {
    // Adiciona a classe para esconder o overflow
    document.body.classList.add('no-scroll')

    return () => {
      // Remove a classe quando o componente desmonta
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return (
    <>
      <main>
        <header
          className="bg-[#090E34] min-h-screen relative flex justify-center items-center"
          id="home"
        >
          <motion.div
            className="absolute right-0 top-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => {
              // Remove a classe para permitir o scroll
              document.body.classList.remove('no-scroll')
            }}
          >
            <Image
              src="/shapes/SVG.png"
              alt="Shapes"
              width={500}
              height={500}
            />
          </motion.div>
          <Navbar />
          <motion.div
            className="container mx-auto text-white z-10 px-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="w-full md:w-9/12 mb-8 md:mb-0"
                variants={fadeInUp}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
                  Desenvolvimento Focado em Resultados
                </h1>
                <p className="text-base sm:text-lg mt-4 text-center md:text-left">
                  Soluções e sistemas personalizados para Startups, SaaS,
                  Negócios, Software e Agências.
                  <br /> Design de alta qualidade e tudo o que você precisa.
                </p>
                <div className="mt-8 flex justify-center md:justify-start">
                  <motion.button
                    className="contactButton"
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Saiba Mais
                    <div className="iconButton">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-auto flex justify-center md:justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src={img.src}
                  alt="Ilustração de desenvolvimento"
                  className="max-w-full md:max-w-[800px]"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/shapes/SVG2.png"
              alt="Shapes"
              width={500}
              height={500}
            />
          </motion.div>
        </header>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <Features />
          <About />
          <MyTeam />
          <Contact />
        </motion.section>
        <Footer />
      </main>
    </>
  )
}
