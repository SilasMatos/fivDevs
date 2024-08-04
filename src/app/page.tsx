import About from '@/components/About'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import Image from 'next/image'
import Footer from '@/components/Footer'
import img from '../assets/img/img-header.png'
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
          <div className="container mx-auto text-white z-10">
            <div className="flex justify-between items-center">
              <div className="w-9/12">
                <h1 className="text-4xl font-bold">
                  Uma Equipe de Desenvolvimento <br /> com Foco em Resultados
                </h1>
                <p className="text-lg mt-4">
                  Uma equipe de programadores dedicada a fornecer <br />{' '}
                  soluções e sistemas personalizados para Startups, SaaS,
                  Negócios, Software e Agências. <br /> Oferecemos design de
                  alta qualidade e tudo o que você precisa
                </p>
                <div className="mt-8">
                  <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                      Saiba Mais
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <img src={img.src} alt="" className="max-w-[600px]" />
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
        <MyTeam />
        <Footer />
      </main>
    </>
  )
}
