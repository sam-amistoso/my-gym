import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const MembershipContainer = styled.div`
  background: #000;
  color: #fff;
  padding: 6rem calc((100vw - 1100px) / 2);
  text-align: center;
`;

export const MembershipH1 = styled.h1`
  margin-bottom: 1rem;
  font-size: clamp(2rem, 5vw, 3rem);
  padding: 0 1rem;
`;

export const MembershipDesc = styled.p`
  margin-bottom: 3rem;
  font-size: clamp(1rem, 3vw, 1.5rem);
`;

export const MembershipWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MembershipCard = styled.div`
  padding: 2rem;
  min-height: 450px;
  width: 325px;
  background: #fff;
  color: #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    width: 90%;
    margin-bottom: 2rem;
  }
`;

export const MembershipTitle = styled.div``;

export const MembershipIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #f9032f;
`;

export const MembershipH3 = styled.h3`
  font-size: clamp(1rem, 5vw, 2rem);
  margin-bottom: 2rem;
`;

export const MembershipPerks = styled.div`
  min-height: 150px;
`;

export const MembershipP = styled.p`
  margin-bottom: 1rem;
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

// export const MembershipCardIcon = styled.div``;
