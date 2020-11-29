import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ButtonSubmit,
  EmailContainer,
  EmailContent,
  EmailForm,
  EmailH1,
  EmailP,
  FormWrap,
  FormLabel,
  FormInput,
} from './EmailElements';
gsap.registerPlugin(ScrollTrigger);

const EmailSection = () => {
  useEffect(() => {
    gsap.from('.animate-email', {
      duration: 0.8,
      opacity: 0,
      stagger: 0.25,
      delay: 0.4,
      y: -150,
      scrollTrigger: {
        trigger: '.animate-email',
        start: 'top center',
        end: 'bottom +=50%',
        toggleActions: 'play none none reverse',
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('Submit was triggered');
  };

  return (
    <EmailContainer id='Email'>
      <EmailContent>
        <EmailH1 className='animate-email'>
          Get Access to Members Only Perk
        </EmailH1>
        <EmailP className='animate-email'>
          Sign up for our newsletter below to get $100 off your first personal
          training session
        </EmailP>
        <EmailForm className='animate-email' onClick={handleSubmit}>
          <FormWrap>
            <FormLabel htmlFor='email'>
              <FormInput type='email' placeholder='Enter your email' />
            </FormLabel>
            <ButtonSubmit>Sign Up</ButtonSubmit>
          </FormWrap>
        </EmailForm>
      </EmailContent>
    </EmailContainer>
  );
};

export default EmailSection;
