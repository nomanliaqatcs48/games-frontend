import React from 'react'
import Header from '../components/common/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import SimpleSetup from '../components/SimpleSetup/SimpleSetup'
import Footer from '../components/common/Footer'
const LandingPage = () => {
  return (
      <div>
          <Header />
          <HeroSection />
          <SimpleSetup />
          <Footer />
      </div>
  );
}

export default LandingPage
