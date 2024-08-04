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
        <header className="bg-[#090E34] min-h-screen relative flex justify-center items-center">
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
                  <button className="bg-[#1D2144] hover:bg-[#5561FF] min-w-[250px] rounded-md shadow-xl border-2 border-[#5561FF] flex justify-center gap-2 items-center py-4 transition duration-300 transform hover:scale-105">
                    <span className="text-white font-normal text-xl">
                      Saiba Mais
                    </span>
                    <IoIosSend size={25} />
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
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
            <Image
              src="/shapes/SVG2.png"
              alt="Shapes"
              layout="fill"
              objectFit="contain"
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
