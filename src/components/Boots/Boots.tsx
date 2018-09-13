import { RouteComponentProps } from '@reach/router';
import React from 'react';

import { getAllBoots } from '../../api';
import { Boot } from '../../types';
import Spinner from '../Spinner';
import Container from '../Styled/Container';
import Heading from '../Styled/Heading';
import NavLink from '../Styled/NavLink';
import Text from '../Styled/Text';

interface BootsState {
  readonly boots: Boot[] | null;
}

export default class Boots extends React.PureComponent<RouteComponentProps, BootsState> {
  public constructor(props) {
    super(props);
    this.state = {
      boots: null,
    };
  }

  public componentDidMount() {
    if (this.state.boots == null) {
      getAllBoots().then(boots => {
        this.setState({
          boots,
        });
      });
    }
  }

  public render() {
    if (this.state.boots ===  null) {
      return <Spinner />;
    }

    return (
      <Container>
        <Heading>Boots</Heading>
        {this.state && this.state.boots.map((boot, index) => (
          <div key={boot.model}>
            <NavLink to={`/boots/${index}`} state={{ boot }}>
              <Text bold>{boot.brand}</Text> <Text>{boot.model}</Text>
            </NavLink>
          </div>
        ))}
      </Container>
    );
  }
}
