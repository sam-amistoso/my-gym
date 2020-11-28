import React from 'react';
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

const EmailSection = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <EmailH1>Get Access to Members Only Perk</EmailH1>
        <EmailP>
          Sign up for our newsletter below to get $100 off your first personal
          training session
        </EmailP>
        <EmailForm>
          <FormWrap>
            <FormLabel for='email'>
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
