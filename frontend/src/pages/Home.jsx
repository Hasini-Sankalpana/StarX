import React from 'react'
import Hero from '../components/Hero'
import Blogs from '../components/Blogs'
import SpaceflightNews from '../components/News'
import Quize from '../components/Quize'
import NewsSection from '../components/News'

function Home() {
  return (
    <div>
      <Hero/>
      <Blogs/>
      <NewsSection/>
      <Quize/>
    </div>
  )
}

export default Home