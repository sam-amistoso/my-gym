import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ButtonLink, HeroBg, HeroContent, HeroH1, HeroP } from './HeroElements';

// gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // let heroRef = useRef();
  let titleRef = useRef();
  let subtitleRef = useRef();
  let buttonRef = useRef();

  useEffect(() => {
    // console.log(titleRef);
    // console.log(subtitleRef);
    // console.log(buttonRef);
    /* gsap.from(heroRef, {
      duration: 1,
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    }); */

    // gsap.from(heroRef, { duration: 0.6, opacity: 0, y: -150, stagger: 0.3 });

    gsap.from('.animate-hero', {
      duration: 0.7,
      opacity: 0,
      y: -150,
      stagger: 0.3,
    });
    // gsap.from(subtitleRef, {
    //   delay: 0.5,
    //   duration: 0.6,
    //   opacity: 0,
    //   y: -150,
    //   stagger: 0.3,
    // });
    // gsap.from(buttonRef, {
    //   delay: 1.1,
    //   duration: 1,
    //   opacity: 0,
    //   y: -150,
    //   stagger: 0.3,
    // });
  }, []);

  return (
    <HeroBg id='Home'>
      <HeroContent>
        <HeroH1
          className='animate-hero'
          ref={(element) => {
            titleRef = element;
          }}
          id='HeroContent'
        >
          Lux Fitness
        </HeroH1>
        <HeroP
          className='animate-hero'
          id='HeroContent'
          ref={(element) => {
            subtitleRef = element;
          }}
        >
          Join Now for $29
        </HeroP>
        <ButtonLink
          to='/'
          className='animate-hero'
          ref={(element) => {
            buttonRef = element;
          }}
          id='HeroContent'
        >
          Get Started
        </ButtonLink>
      </HeroContent>
    </HeroBg>
  );
};

export default Hero;
