import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

export const ServicesWrapper = styled.div`
  padding: 8rem calc((100vw - 1200px) / 2);
`;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureWrapper = styled.div``;

export const ServicesTopLine = styled.p`
  color: #f9032f;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ServicesHeading = styled.h1`
  margin-bottom: 1rem;
  font-size: cmalp(2rem, 6vw, 3rem);
`;

export const ServicesFeatures = styled.div`
  list-style: none;
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 5vw, 1.2rem);
`;

export const ServicesIcon = styled(FaCheckCircle)`
  margin-right: 0.5rem;
  color: #f9032f;
`;

export const ServicesFeatureP = styled.p`
  line-height: 2;
`;

export const ServicesImgContainer = styled.div``;

export const ServicesImg = styled.img`
  width: 100%;
  height: 100%;
`;
