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

export default function Home() {
  return (
    <>
      <main>
        <header
          className="bg-[#090E34] min-h-screen relative flex justify-center items-center"
          id="home"
        >
          <div className="absolute right-0 top-0">
            <Image
              src="/shapes/SVG.png"
              alt="Shapes"
              width={500}
              height={500}
            />
          </div>
          <Navbar />
          <div className="container mx-auto text-white z-10 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-9/12 mb-8 md:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
                  Desenvolvimento Focado em Resultados
                </h1>
                <p className="text-base sm:text-lg mt-4 text-center md:text-left">
                  Soluções e sistemas personalizados para Startups, SaaS,
                  Negócios, Software e Agências.
                  <br /> Design de alta qualidade e tudo o que você precisa.
                </p>
                <div className="mt-8 flex justify-center md:justify-start">
                  <button className="contactButton">
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
                  </button>
                </div>
              </div>
              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <img
                  src={img.src}
                  alt="Ilustração de desenvolvimento"
                  className="max-w-full md:max-w-[800px]"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0  ">
            <Image
              src="/shapes/SVG2.png"
              alt="Shapes"
              width={500}
              height={500}
            />
          </div>
        </header>

        <Features />
        <About />
        <MyTeam />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
