import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavContainer = styled.nav`
  background: ${({ theme }) => theme.dark1};
  height: 60px;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
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
    transform: translate(-100%, 30%);
  }
`;

export const NavbarMenu = styled.div`
  padding-right: 1rem;
`;

export const NavbarLink = styled(LinkS)`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.red};
  }

  &.active {
    border-bottom: 3px solid #f9032f;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
