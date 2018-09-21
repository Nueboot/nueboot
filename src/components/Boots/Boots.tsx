import React from 'react';

import { BootInfo } from '../../api/types';
import { Container, Heading, NavigationLink, Text } from '../Styled';
import Spinner from '../Styled/Spinner';

import styled from 'styled-components';
import './Boots.css';

const BoldText = styled(Text)`
  font-weight: 700;
`;

interface ByBrand {
  [key: string]: BootInfo[];
}

export interface StateProps {
  boots: BootInfo[];
  loading: boolean;
  byBrand: ByBrand;
}

export type BootsProps = StateProps;

export default class Boots extends React.Component<BootsProps> {
  public render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (!this.props.boots) {
      return null;
    }
    return (
      <Container>
        <Heading>Boots</Heading>
        <div className="boots">
          {this.props.boots.map(boot => (
            <div className="boot-list-item" key={boot.id}>
              <NavigationLink to={`boots/${boot.id}`}>
                <BoldText>{boot.brand}</BoldText> {boot.model}
              </NavigationLink>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}
