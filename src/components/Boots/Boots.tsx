import React from 'react';

import { BootInfo } from '../../api/types';
import { Container, Heading, NavigationLink } from '../Styled';
import Spinner from '../Styled/Spinner';

import './Boots.css';

export interface StateProps {
  boots: BootInfo[];
  loading: boolean;
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
          {Object.keys(this.props.boots).map(key => {
            const boot: BootInfo = this.props.boots[key];
            return (
              <div className="boot-list-item" key={boot.model}>
                <NavigationLink to={`boots/${key}`}>
                  {boot.brand} {boot.model}
                </NavigationLink>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}
