import React from 'react';

import { BootInfo, Brands } from '../../api/types';
import { Container, Heading, Subheading, Text } from '../Styled';
import Spinner from '../Styled/Spinner';

import styled from 'styled-components';
import BootCard from '../BootCard';
import './Boots.css';

interface ByBrand {
  [key: string]: BootInfo[];
}

export interface StateProps {
  boots: BootInfo[];
  loading: boolean;
  byBrand: ByBrand;
}

export interface State {
  filter: Brands | 'All';
}

export type BootsProps = StateProps;

const BootCardContainer = styled.div`
  margin-bottom: 1rem;
  padding: 0.25rem;
  :hover {
    opacity: 0.7;
  }
`;

const FilterText = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  border: 1px solid black;
  :hover {
    color: white;
    background-color: black;
  }
`;

const ActiveFilter = styled(FilterText)`
  color: white;
  background-color: black;
  font-weight: 700;
`;

const FilterContainer = styled.div`
  margin-bottom: 1rem;
`;

export default class Boots extends React.Component<BootsProps, State> {
  public constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
  }

  public render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (!this.props.boots) {
      return null;
    }
    const brands = Object.keys(this.props.byBrand).map(brand => {
      return this.state.filter === brand ? (
        <ActiveFilter onClick={this.handleFilterClick}>{brand}</ActiveFilter>
      ) : (
        <FilterText onClick={this.handleFilterClick}>{brand}</FilterText>
      );
    });

    const boots =
      this.state.filter === 'All'
        ? this.props.boots
        : this.props.byBrand[this.state.filter];

    return (
      <Container>
        <Heading>Boots</Heading>
        <FilterContainer className="boots-filter">
          <Subheading style={{ marginBottom: '10px' }}>Filter:</Subheading>
          {brands}
        </FilterContainer>
        <div className="boots">
          {boots.map(boot => (
            <BootCardContainer>
              <BootCard boot={boot} />
            </BootCardContainer>
          ))}
        </div>
      </Container>
    );
  }

  private handleFilterClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const text = e.currentTarget.innerText as Brands;
    const filter = this.state.filter === text ? 'All' : text;
    this.setState({ filter });
  };
}
