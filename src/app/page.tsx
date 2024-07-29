import About from '@/components/About'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main>
        <header className="bg-[#090E34] min-h-screen relative flex justify-center items-center  ">
          <div className="absolute right-0 top-0 ">
            <Image
              src="/shapes/SVG.png"
              alt="Shapes"
              width={500}
              height={500}
            />
          </div>
          <Navbar />
          <div className="container mx-auto text-white z-10">
            <div className="text-center pt-20">
              <h1 className="text-3xl font-bold">
                Uma Equipe de Desenvolvimento <br /> com Foco em Resultados
              </h1>
              <p className="text-lg mt-4">
                Uma equipe de programadores dedicada a fornecer soluções e
                sistemas personalizados para Startups, SaaS, Negócios, Software
                e Agências. Oferecemos design de alta qualidade e tudo o que
                você precisa
              </p>
              <div className="mt-8">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <Image
              src="/shapes/SVG2.png"
              alt="Shapes"
              width={500}
              height={500}
            />
          </div>
        </header>
        <Features />
        <Team />
        <About />
        <Contact />
      </main>
    </>
  )
}
