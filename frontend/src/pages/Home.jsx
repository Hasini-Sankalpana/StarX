import React from 'react'
import Hero from '../components/Hero'
import Blogs from '../components/Blogs'
import Quize from '../components/Quize'
import NewsSection from '../components/News'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <div>
      <Hero/>
      <Blogs/>
      <NewsSection/>
      <Quize/>
      <Gallery/>
    </div>
  )
}

export default Home