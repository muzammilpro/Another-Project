import React from 'react'
import ImagesCard from '../imagesCard/imagesCard'

export default function PortfolioCard() {
  return (
    <div className="container px-5 md:px-10 lg:px-36 my-5 md:my-20 mx-auto">
     <h1 className="text-[#2370C8] text-[20px] md:text-[28px]  font-semibold">Our Portfolio</h1>
     <p className="text-xl mt-2 font-semibold md:text-3xl">Take a Look at our Latest Works</p>
     <div className=" mx-auto grid gap-3 gap-x-4 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     <ImagesCard src='/imgs/web.avif' title="Web development"/>
     <ImagesCard src='/imgs/graphic.avif' title="graphic Designing"/>
     <ImagesCard src='/imgs/digital.avif' title="Digital Marketing"/>
     <ImagesCard src='/imgs/a.jpg' title="Artificial Intelligence"/>
     <ImagesCard src='/imgs/machine.png' title="Machine Learning"/>
     <ImagesCard src='/imgs/app.avif' title="Mobile App Development"/>
     
     </div>
    </div>
  )
}
