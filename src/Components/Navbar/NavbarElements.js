import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';

export const NavContainer = styled.nav`
  background: ${({ theme }) => theme.dark1};
  height: 60px;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  padding-left: 1rem;
  font-size: 1.5rem;
`;

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    color: #fff;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 50%);
  }
`;

export const NavbarMenu = styled.div``;

export const NavbarLink = styled(LinkR)`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  padding: 0 1rem;

  &:hover {
    color: ${({ theme }) => theme.red};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
