import React from 'react'
import Hero from '../components/Hero'
import Blogs from '../components/Blogs'
import SpaceflightNews from '../components/News'

function Home() {
  return (
    <div>
      <Hero/>
      <Blogs/>
      <SpaceflightNews/>
    </div>
  )
}

export default Home