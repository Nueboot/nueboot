import { BootInfo } from 'api/types';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Heading } from '../Styled';
import Spinner from '../Styled/Spinner';

export interface MatchParams {
  bootId: string;
}

export interface Props extends RouteComponentProps<MatchParams> {}

export interface DispatchProps {
  getBoot(): void;
}
export interface StateProps {
  boot?: BootInfo;
  loading: boolean;
}

export type BootProps = Props & DispatchProps & StateProps;

export default class Boot extends React.Component<BootProps> {
  public componentDidMount() {
    if (!this.props.boot) {
      this.props.getBoot();
    }
  }

  public render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (!this.props.boot) {
     return null;
    }
    return(
      <div>
        <Heading>{this.props.boot.brand}</Heading>
        <Heading>{this.props.boot.model}</Heading>
      </div>
    );
  }
}
