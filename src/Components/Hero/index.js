import React from 'react';
import { ButtonLink, HeroBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const Hero = () => {
  return (
    <HeroBg>
      <HeroContent>
        <HeroH1>Lux Fitness</HeroH1>
        <HeroP>Join Now for $29</HeroP>
        <ButtonLink to='/'>Get Started</ButtonLink>
      </HeroContent>
    </HeroBg>
  );
};

export default Hero;
