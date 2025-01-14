import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen flex justify-center items-center m-10'>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-97"
        src="/spaceback2.mp4"
        autoPlay
        loop
        muted
      ></video>

        <div className="justify-items-center w-10/12 z-10" >
        <div className="text-center">
            <h1 className=' text-6xl mb-5 font-bold  text-yellow-400 font-alfaSlab font-normal not-italic'>Explore the Wonders of the Universe</h1>
            <p className='justify-self-center text-sm mb-14 text-white w-9/12'>Embark on a cosmic journey through daily space images, exciting space news, and incredible discoveries. From the latest space missions to breathtaking astronomy pictures, StarX brings the universe to your fingertips. Join us and start exploring the mysteries of space today!</p>
        </div>
        <div className="hero-btn z-10">
            <button className='border-white border-2 rounded-lg py-2 px-10 font-semibold text-white hover:scale-105 transition-all'>Start Exploring</button>
        </div>
        </div>
    </div>
  )
}

export default Hero