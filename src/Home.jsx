import React from 'react'
import HeroSection from "./components/HeroSection"
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeatureProduct from './components/FeatureProduct'
import { useEffect } from 'react'
const Home = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
    <HeroSection/> 
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    </div>
  )
}

export default Home
