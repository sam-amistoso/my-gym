import React from 'react';
import {
  MembershipCard,
  MembershipContainer,
  MembershipDesc,
  MembershipH1,
  MembershipH3,
  MembershipIcon,
  MembershipTitle,
  MembershipWrapper,
  MembershipPerks,
  MembershipP,
  ButtonLink,
} from './MermbershipElements';

import { FaDumbbell, FaBicycle } from 'react-icons/fa';

const Membership = () => {
  return (
    <MembershipContainer>
      <MembershipH1>View Our Plans</MembershipH1>
      <MembershipDesc>
        Get started today and receive 25% off your first month
      </MembershipDesc>
      <MembershipWrapper>
        <MembershipCard>
          <MembershipTitle>
            <MembershipIcon>
              <FaDumbbell />
            </MembershipIcon>
            <MembershipH3>Starter</MembershipH3>
          </MembershipTitle>
          <MembershipPerks>
            <MembershipP>Get access to the entire gym</MembershipP>
            <MembershipP>$29 per month</MembershipP>
          </MembershipPerks>
          <ButtonLink to='/'>Sign Up</ButtonLink>
        </MembershipCard>

        <MembershipCard>
          <MembershipTitle>
            <MembershipIcon>
              <FaBicycle />
            </MembershipIcon>
            <MembershipH3>Silver</MembershipH3>
          </MembershipTitle>
          <MembershipPerks>
            <MembershipP>Group Fitness Classes</MembershipP>
            <MembershipP>$49 per month</MembershipP>
          </MembershipPerks>
          <ButtonLink to='/'>Sign Up</ButtonLink>
        </MembershipCard>

        <MembershipCard>
          <MembershipTitle>
            <MembershipIcon>
              <FaDumbbell />
            </MembershipIcon>
            <MembershipH3>Gold</MembershipH3>
          </MembershipTitle>
          <MembershipPerks>
            <MembershipP>Private Personal Training</MembershipP>
            <MembershipP>$99 per month</MembershipP>
          </MembershipPerks>
          <ButtonLink to='/'>Sign Up</ButtonLink>
        </MembershipCard>
      </MembershipWrapper>
    </MembershipContainer>
  );
};

export default Membership;
