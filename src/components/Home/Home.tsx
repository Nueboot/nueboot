import React from 'react';
import Header from '../Header';
import { Container, Heading } from '../Styled';
import Spinner from '../Styled/Spinner';

const Home = () => (
  <Container>
    <Header/>
    <Heading>Hi</Heading>
    <Spinner />
  </Container>
);

export default Home;
