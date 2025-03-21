import Events from './components/Events';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Commentary from './components/Commentary';

import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import React from 'react';
import LatestProduct from './components/LatestProducts/LatestProduct';
import Discover from './components/Discover/Discover';
import Support from './components/Support/Support';


export default function Home() {

  return (
    <>
      <h1 className='hidden'>Digicom</h1>
      <HeroSection />
      {/* <Commentary /> */}
      <FeaturedProducts />
      <LatestProduct />
      <Discover />
      <Support />

      {/* <Events /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}

    </>
  )
}
