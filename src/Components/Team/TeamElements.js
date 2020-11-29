import styled from 'styled-components';

export const TeamContainer = styled.div`
  padding: 8rem calc((100vw - 1100px) / 2);
`;

export const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto, 350px);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const TeamText = styled.div`
  padding: 1rem;

  :nth-child(1) {
    grid-row: 1/2;
    grid-column: 2/3;
  }

  :nth-child(2) {
    grid-row: 5/6;
    grid-column: 1/2;
  }

  @media screen and (max-width: 768px) {
    :nth-child(1) {
      grid-row: 1/2;
      grid-column: 1/2;
    }

    :nth-child(2) {
      grid-row: 6/7;
      grid-column: 1/2;
    }
  }
`;

export const TeamTopLine = styled.p`
  color: #f9032f;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.3rem;
`;

export const TeamH1 = styled.h1`
  margin-bottom: 1rem;
  font-size: 3rem;
`;

export const TeamDesc = styled.p`
  font-size: clamp(1rem, 3vw, 1.3rem);
  line-height: 1.4;
`;

export const TeamCard = styled.div`
  margin: 1rem;
  border-radius: 10px;
  position: relative;

  :nth-child(3) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
  :nth-child(4) {
    grid-row: 2/4;
    grid-column: 2/3;
  }
  :nth-child(5) {
    grid-row: 3/5;
    grid-column: 1/2;
  }
  :nth-child(6) {
    grid-row: 4/6;
    grid-column: 2/3;
  }

  @media screen and (max-width: 768px) {
    :nth-child(3) {
      grid-row: 3/4;
      grid-column: 1/2;
    }
    :nth-child(4) {
      grid-row: 4/5;
      grid-column: 1/2;
    }
    :nth-child(5) {
      grid-row: 5/6;
      grid-column: 1/2;
    }
    :nth-child(6) {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  }
`;

export const TeamName = styled.p`
  position: absolute;
  bottom: 30px;
  color: #fff;
  left: 25px;
  font-size: 3rem;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
