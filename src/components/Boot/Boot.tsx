import { BootInfo } from 'api/types';
import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';

import Rating from '../Rating';
import Reviews from '../Reviews';
import { Container, Heading, Image, Spinner, Subheading } from '../Styled';

import './Boot.css';
import BootStats from './BootStats';

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
    if (!this.props.loading && !this.props.boot) {
      return <Redirect to="/boots" />;
    }
    if (!this.props.boot) {
      return null;
    }

    return (
      <Container>
        <div className="boot-container">
          <div className="boot-image">
            <Image src="http://via.placeholder.com/300x200" />
          </div>
          <Reviews id={this.props.match.params.bootId} />
          <div className="boot-info">
            <Subheading>Brand</Subheading>
            <Heading>{this.props.boot.brand}</Heading>

            <Subheading>Model</Subheading>
            <Heading>{this.props.boot.model}</Heading>

            <Subheading>Rating</Subheading>
            <Rating stars={5} />
          </div>

          <BootStats
            weight={this.props.boot.weight}
            material={this.props.boot.material}
            releaseDate={this.props.boot.releaseDate}
            msrp={this.props.boot.msrp}
          />
        </div>
      </Container>
    );
  }
}
