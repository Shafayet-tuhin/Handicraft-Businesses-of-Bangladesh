import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './services/Services'
import Parts from './Parts/Parts'
import Teams from './Team/Teams'
import Why from './Why Choose Us/Why'
import Business from './Business/Business'

const Home = () => {
  return (

    <div>
      <Banner />
      <About/>
      <Business/>
      <Services />
      <Parts />
      {/* <Teams/> */}
      {/* <Why/> */}
    </div>

  )
}

export default Home