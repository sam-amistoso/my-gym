import React from 'react';
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
import { FaCheckCircle } from 'react-icons/fa';
import ImgGym2 from '../../assets/images/gym-2.jpg';

const Services = () => {
  return (
    <ServicesWrapper>
      <ServicesContainer>
        <FeatureWrapper>
          <ServicesTopLine>Features</ServicesTopLine>
          <ServicesHeading>What we offer</ServicesHeading>
          <ServicesFeatures>
            <ServicesFeatureP>
              <ServicesIcon />
              Group Fitness Classes
            </ServicesFeatureP>
            <ServicesFeatureP>
              <ServicesIcon />
              Personal Trainer Sessions
            </ServicesFeatureP>
            <ServicesFeatureP>
              <ServicesIcon />
              Indoor Pool
            </ServicesFeatureP>
            <ServicesFeatureP>
              <ServicesIcon />
              Steam Room and Sauna
            </ServicesFeatureP>
            <ServicesFeatureP>
              <ServicesIcon />
              Basketball Court
            </ServicesFeatureP>
            <ServicesFeatureP>
              <ServicesIcon />
              Open 24/7
            </ServicesFeatureP>
          </ServicesFeatures>
        </FeatureWrapper>
        <ServicesImgContainer>
          <ServicesImg src={ImgGym2} alt='gym' />
        </ServicesImgContainer>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;
