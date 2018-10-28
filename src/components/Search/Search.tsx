import React from 'react';

import { BootInfo } from 'api/types';
import BootsView from 'components/Boots/BootsView';
import { Container, Heading, Subheading, Text } from '../Styled';

export interface StateProps {
  readonly query: string;
  readonly boots: BootInfo[];
}

export default class Search extends React.Component<StateProps> {
  public render() {
    return (
      <Container>
        <Heading>Search</Heading>
        <Subheading>Search term: {this.props.query}</Subheading>
        {this.props.boots.length > 1 ? (
          <BootsView boots={this.props.boots} />
        ) : (
          <Text>No results</Text>
        )}
      </Container>
    );
  }
}
