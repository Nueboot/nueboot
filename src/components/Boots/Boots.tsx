import React from 'react';
import { Link } from 'react-router-dom';
import { BootInfo } from '../../api/types';
import { Container, Heading, Text } from '../Styled';
import Spinner from '../Styled/Spinner';

export interface StateProps {
  boots: BootInfo[];
  loading: boolean;
}

export type BootsProps = StateProps;

const style: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '1rem',
};

export default class Boots extends React.Component<BootsProps> {
  public render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (!this.props.boots) {
      return null;
    }
    return (
      <Container className="boots">
        <Heading>Boots</Heading>
        <div style={style} className="boots">
          {Object.keys(this.props.boots).map(key => {
            const boot: BootInfo = this.props.boots[key];
            return(
              <div className="boot-list-item mv1" key={boot.model}>
                <Link to={`boots/${key}`} className="link animate-bg underline-hover hover-green">
                  <Text className="b">{boot.brand} </Text>
                  <Text>{boot.model}</Text>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}
