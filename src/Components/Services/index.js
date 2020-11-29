import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FeatureWrapper,
  ServicesContainer,
  ServicesFeatureP,
  ServicesFeatures,
  ServicesHeading,
  ServicesImg,
  ServicesImgContainer,
  ServicesTopLine,
  ServicesWrapper,
  ServicesIcon,
} from './ServicesElements';
import ImgGym2 from '../../assets/images/gym-2.jpg';
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  let servicesRef = useRef();

  useEffect(() => {
    gsap.from('.animate-services', {
      duration: 0.3,
      autoAlpha: 0,
      ease: 'none',
      stagger: 0.3,
      x: -200,
      scrollTrigger: {
        trigger: '.animate-services',
        start: 'top center',
        end: 'bottom +=50%',
        toggleActions: 'restart none none reverse',
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from('.animate-img', {
      duration: 0.5,
      autoAlpha: 0,
      ease: 'none',
      x: -200,
      scrollTrigger: {
        trigger: '.animate-services',
        start: 'top center',
        end: 'bottom +=50%',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
    });
  }, []);

  return (
    <ServicesWrapper id='Services'>
      <ServicesContainer
        ref={(element) => {
          servicesRef = element;
        }}
      >
        <FeatureWrapper>
          <ServicesTopLine className='animate-services'>
            Features
          </ServicesTopLine>
          <ServicesHeading className='animate-services'>
            What we offer
          </ServicesHeading>
          <ServicesFeatures>
            <ServicesFeatureP className='animate-services'>
              <ServicesIcon />
              Group Fitness Classes
            </ServicesFeatureP>
            <ServicesFeatureP className='animate-services'>
              <ServicesIcon />
              Personal Trainer Sessions
            </ServicesFeatureP>
            <ServicesFeatureP className='animate-services'>
              <ServicesIcon />
              Indoor Pool
            </ServicesFeatureP>
            <ServicesFeatureP className='animate-services'>
              <ServicesIcon />
              Steam Room and Sauna
            </ServicesFeatureP>
            <ServicesFeatureP className='animate-services'>
              <ServicesIcon />
              Basketball Court
            </ServicesFeatureP>
            <ServicesFeatureP className='animate-services'>
              <ServicesIcon />
              Open 24/7
            </ServicesFeatureP>
          </ServicesFeatures>
        </FeatureWrapper>
        <ServicesImgContainer>
          <ServicesImg src={ImgGym2} alt='gym' className='animate-img' />
        </ServicesImgContainer>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;
