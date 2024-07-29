import React from 'react'
import type { StaticImageData } from 'next/image'
import bg from '../assets/shapes/shapebg.png'
import team from '../assets/img/team.jpg'

export default function Team() {
  return (
    <section className="min-h-screen bg-[#090E34] p-10 flex items-center flex-col justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={bg.src} alt="Background Shape" />
      </div>
      <div className="container mx-auto z-10">
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl">We are ready to help</h1>
          <p className="text-lg font-medium text-gray-300">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-2/4 rounded-md overflow-hidden shadow-xl">
            <img
              src={team.src}
              alt="Team"
              className="w-full h-auto rounded-md "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
