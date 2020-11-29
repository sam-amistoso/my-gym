import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TeamContainer,
  TeamDesc,
  TeamH1,
  TeamText,
  TeamTopLine,
  TeamWrapper,
  TeamCard,
  TeamName,
  ProfileImg,
} from './TeamElements';
import Person1 from '../../assets/images/person-1.jpg';
import Person2 from '../../assets/images/person-2.jpg';
import Person3 from '../../assets/images/person-3.jpg';
import Person4 from '../../assets/images/person-4.jpg';
gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  useEffect(() => {
    gsap.from('.animate-teams', {
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2,
      y: -150,
      scrollTrigger: {
        trigger: '#Trainers',
        endTrigger: '#Email',
        start: 'top center',
        end: 'start',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
    });
  }, []);
  return (
    <TeamContainer id='Trainers'>
      <TeamWrapper>
        <TeamText className='animate-teams'>
          <TeamTopLine>Private Coaching</TeamTopLine>
          <TeamH1>Meet our Trainers</TeamH1>
          <TeamDesc>
            All our personal trainers have over 30 years of experience combined.
            Each trainer specializes in strength and mobility workouts
          </TeamDesc>
        </TeamText>

        <TeamText className='animate-teams'>
          <TeamTopLine>Free Trial</TeamTopLine>
          <TeamH1>7 Day Trial</TeamH1>
          <TeamDesc>
            You can work with each trainer for up to 7 days for free in order to
            see if they are a good fit for your goals.
          </TeamDesc>
        </TeamText>

        <TeamCard className='animate-teams'>
          <TeamName>Sarah</TeamName>
          <ProfileImg src={Person1} alt='person-1' />
        </TeamCard>

        <TeamCard className='animate-teams'>
          <TeamName>Jess</TeamName>
          <ProfileImg src={Person3} alt='person-3' />
        </TeamCard>

        <TeamCard className='animate-teams'>
          <TeamName>Amanda</TeamName>
          <ProfileImg src={Person2} alt='person-2' />
        </TeamCard>

        <TeamCard className='animate-teams'>
          <TeamName>Greg</TeamName>
          <ProfileImg src={Person4} alt='person-4' />
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default TeamSection;
