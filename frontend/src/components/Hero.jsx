import React from 'react';

function Hero() {
  return (
    <div className="min-h-screen flex justify-center items-center p-5 " id='hero'>
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        src="/spaceback4.mp4"
        autoPlay
        loop
        muted
      ></video>

     
      <div className="relative z-10 w-full max-w-10xl p-5 pt-20 text-center">
       
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 text-center mb-5 font-righteous">
  Explore the Wonders of the Universe
</h1>

        
       
        <p className="text-sm sm:text-base md:text-lg lg:text-md mb-10 text-white mx-auto max-w-3xl">
          Embark on a cosmic journey through daily space images, exciting space news, and incredible discoveries. 
          From the latest space missions to breathtaking astronomy pictures, StarX brings the universe to your fingertips. 
          Join us and start exploring the mysteries of space today!
        </p>
        
      
        <div className="hero-btn">
          <button className="border-[#841995]  border-2 rounded-lg py-2 px-6 sm:px-10 font-semibold text-white hover:scale-105 transition-transform">
           <a href="#news"> Start Exploring</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;