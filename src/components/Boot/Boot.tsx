import { RouteComponentProps } from '@reach/router';
import React from 'react';

import { getBoot } from 'api';
import { Boot as BootInfo } from '../../types';
import Spinner from '../Spinner';
import Container from '../Styled/Container';
import Heading from '../Styled/Heading';

interface BootProps {
  readonly bootId: string;
}

interface BootState {
  boot: BootInfo | null;
}

export default class Boot extends React.PureComponent<RouteComponentProps<BootProps>, BootState> {
  public constructor(props) {
    super(props);
    this.state = {
      boot: null,
    };
  }

  public componentDidMount() {
    if (this.props.location) {
      if (this.props.location.state.boot) {
        this.setState({
          boot: this.props.location.state.boot,
        });
      } else if (this.props.bootId) {
        getBoot(this.props.bootId).then(boot => {
          this.setState({
            boot,
          });
        });
      }
    }
  }
  public render() {
    const { boot } = this.state;
    if (boot === null) {
      return <Spinner />;
    }

    return (
      <Container>
        <Heading>{boot.brand}</Heading>
      </Container>
    );
  }
}
