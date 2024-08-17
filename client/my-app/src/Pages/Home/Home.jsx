import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './Our Products/Products'
import Parts from './Products/Products'
import Business from './Business/Business'

const Home = () => {
  return (

    <div>
      <Banner />
      <About/>
      <Business/>
      <Services />
      <Parts />
    </div>

  )
}

export default Home