import React from 'react';
import styled from 'styled-components';

import SearchBox from '../SearchBox';
import { Container, Heading } from '../Styled';
import Field from './Field';

const HomeContainer = styled.div`
  background: linear-gradient(
    139deg,
    rgba(66, 135, 132, 1) 0%,
    rgba(144, 228, 120, 1) 50%,
    rgba(223, 255, 168, 1) 100%
  );
`;

const FieldContainer = styled.div`
  svg {
    position: absolute;
    top: 0;
    z-index: 1;
    overflow: hidden;
    opacity: 0.2;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 10;
`;

const HomeHeading = styled(Heading)`
  margin: 6rem 0 4rem;
  line-height: 4rem;
  font-size: 4rem;
  color: white;
`;

const Home = () => (
  <HomeContainer className="home">
    <StyledContainer>
      <HomeHeading>Boot Reviews by You</HomeHeading>
      <SearchBox />
    </StyledContainer>
    <FieldContainer>
      <Field />
    </FieldContainer>
  </HomeContainer>
);

export default Home;
