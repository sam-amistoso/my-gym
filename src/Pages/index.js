import React from 'react';
import EmailSection from '../Components/EmailSection';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Membership from '../Components/Membership';
import Services from '../Components/Services';
import TeamSection from '../Components/Team';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Membership />
      <TeamSection />
      <EmailSection />
      <Footer />
    </>
  );
};

export default Home;
