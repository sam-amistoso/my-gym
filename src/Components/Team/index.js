import React from 'react';
import {
  TeamContainer,
  TeamDesc,
  TeamH1,
  TeamText,
  TeamTopLine,
  TeamWrapper,
  TeamCard,
  TeamName,
  ProfileImg,
} from './TeamElements';
import Person1 from '../../assets/images/person-1.jpg';
import Person2 from '../../assets/images/person-2.jpg';
import Person3 from '../../assets/images/person-3.jpg';
import Person4 from '../../assets/images/person-4.jpg';

const TeamSection = () => {
  return (
    <TeamContainer>
      <TeamWrapper>
        <TeamText>
          <TeamTopLine>Private Coaching</TeamTopLine>
          <TeamH1>Meet our Trainers</TeamH1>
          <TeamDesc>
            All our personal trainers have over 30 years of experience combined.
            Each trainer specializes in strength and mobility workouts
          </TeamDesc>
        </TeamText>

        <TeamText>
          <TeamTopLine>Free Trial</TeamTopLine>
          <TeamH1>7 Day Trial</TeamH1>
          <TeamDesc>
            You can work with each trainer for up to 7 days for free in order to
            see if they are a good fit for your goals.
          </TeamDesc>
        </TeamText>

        <TeamCard>
          <TeamName>Sarah</TeamName>
          <ProfileImg src={Person1} alt='person-1' />
        </TeamCard>

        <TeamCard>
          <TeamName>Jess</TeamName>
          <ProfileImg src={Person3} alt='person-3' />
        </TeamCard>

        <TeamCard>
          <TeamName>Amanda</TeamName>
          <ProfileImg src={Person2} alt='person-2' />
        </TeamCard>

        <TeamCard>
          <TeamName>Greg</TeamName>
          <ProfileImg src={Person4} alt='person-4' />
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default TeamSection;
