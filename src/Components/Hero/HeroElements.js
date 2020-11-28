import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import ImgGym1 from '../../assets/images/gym-1.jpg';

export const HeroBg = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)),
    url(${ImgGym1});
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeroContent = styled.div`
  color: #fff;
  padding: 3rem 1rem;
  line-height: 1;
`;

export const HeroH1 = styled.h1`
  font-size: clamp(3rem, 8vw, 7rem);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 4vw, 2.5rem);
  margin-bottom: 3rem;
`;

export const ButtonLink = styled(LinkR)`
  padding: 1rem 3rem;
  border: none;
  background: #f9032f;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background: #000;
  }
`;
