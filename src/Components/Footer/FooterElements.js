import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  background: #000;
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterDesc = styled.div`
  padding: 0 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

export const FooterH1 = styled.h1`
  margin-bottom: 2rem;
  color: #f9032f;
  font-size: 1.5rem;
`;

export const FooterP = styled.p`
  margin-bottom: 1rem;
`;

export const FooterPhone = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: rgba(242, 242, 242);
  font-size: 14px;
  margin-bottom: 0.5rem;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #f9032f;
  }
`;
