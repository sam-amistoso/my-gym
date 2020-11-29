import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MembershipCard,
  MembershipContainer,
  MembershipDesc,
  MembershipH1,
  MembershipH3,
  MembershipIcon,
  MembershipTitle,
  MembershipWrapper,
  MembershipPerks,
  MembershipP,
  ButtonLink,
} from './MermbershipElements';
import { FaDumbbell } from 'react-icons/fa';
gsap.registerPlugin(ScrollTrigger);

const Membership = () => {
  useEffect(() => {
    gsap.from('.animate-membership', {
      duration: 0.5,
      opacity: 0,
      stagger: 0.3,
      y: -150,
      scrollTrigger: {
        trigger: '.animate-membership',
        start: 'top center',
        end: 'bottom +=50%',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
    });

    gsap.from('.animate-cards', {
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      delay: 0.5,
      y: -150,
      scrollTrigger: {
        trigger: '.animate-membership',
        start: 'top center',
        end: 'bottom +=50%',
        toggleActions: 'play none none reverse',
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <MembershipContainer id='Plans'>
      <MembershipH1 className='animate-membership'>View Our Plans</MembershipH1>
      <MembershipDesc className='animate-membership'>
        Get started today and receive 25% off your first month
      </MembershipDesc>
      <MembershipWrapper>
        <MembershipCard className='animate-cards'>
          <MembershipTitle>
            <MembershipIcon>
              <FaDumbbell />
            </MembershipIcon>
            <MembershipH3>Starter</MembershipH3>
          </MembershipTitle>
          <MembershipPerks>
            <MembershipP>Get access to the entire gym</MembershipP>
            <MembershipP>$29 per month</MembershipP>
          </MembershipPerks>
          <ButtonLink to='/'>Sign Up</ButtonLink>
        </MembershipCard>

        <MembershipCard className='animate-cards'>
          <MembershipTitle>
            <MembershipIcon>
              <FaDumbbell />
            </MembershipIcon>
            <MembershipH3>Silver</MembershipH3>
          </MembershipTitle>
          <MembershipPerks>
            <MembershipP>Group Fitness Classes</MembershipP>
            <MembershipP>$49 per month</MembershipP>
          </MembershipPerks>
          <ButtonLink to='/'>Sign Up</ButtonLink>
        </MembershipCard>

        <MembershipCard className='animate-cards'>
          <MembershipTitle>
            <MembershipIcon>
              <FaDumbbell />
            </MembershipIcon>
            <MembershipH3>Gold</MembershipH3>
          </MembershipTitle>
          <MembershipPerks>
            <MembershipP>Private Personal Training</MembershipP>
            <MembershipP>$99 per month</MembershipP>
          </MembershipPerks>
          <ButtonLink to='/'>Sign Up</ButtonLink>
        </MembershipCard>
      </MembershipWrapper>
    </MembershipContainer>
  );
};

export default Membership;
