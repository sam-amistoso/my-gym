import React from 'react';
import {
  FooterContainer,
  FooterDesc,
  FooterH1,
  FooterLink,
  FooterLinks,
  FooterP,
  FooterPhone,
  FooterTitle,
  FooterWrapper,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDesc>
          <FooterH1>LUX FITNESS</FooterH1>
          <FooterP>Luxury fitness gym located in downtown Florida.</FooterP>
          <FooterPhone>305 - 123 - 4567</FooterPhone>
        </FooterDesc>
        <FooterLinks>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterLink to='/'>Contact</FooterLink>
          <FooterLink to='/'>Support</FooterLink>
          <FooterLink to='/'>Sponsorship</FooterLink>
        </FooterLinks>
      </FooterWrapper>

      <FooterWrapper>
        <FooterLinks>
          <FooterTitle>Memberships</FooterTitle>
          <FooterLink to='/'>Pricing</FooterLink>
          <FooterLink to='/'>Plans</FooterLink>
          <FooterLink to='/'>FAQ</FooterLink>
        </FooterLinks>

        <FooterLinks>
          <FooterTitle>Social Media</FooterTitle>
          <FooterLink to='/'>Instagram</FooterLink>
          <FooterLink to='/'>Facebook</FooterLink>
          <FooterLink to='/'>YouTube</FooterLink>
          <FooterLink to='/'>Twitter</FooterLink>
        </FooterLinks>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
