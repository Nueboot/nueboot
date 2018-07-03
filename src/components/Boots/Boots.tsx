import React from 'react';
import { Link } from 'react-router-dom';
import { BootInfo } from '../../api/types';
import { Heading, Text } from '../Styled';
import Spinner from '../Styled/Spinner';

export interface StateProps {
  boots: BootInfo[];
  loading: boolean;
}

export interface DispatchProps {
  getBoots(): void;
}

export type BootsProps = StateProps & DispatchProps;

const style: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
};

export default class Boots extends React.Component<BootsProps> {
  public componentDidMount() {
    this.props.getBoots();
  }

  public render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (!this.props.boots) {
      return null;
    }
    return (
      <>
        <Heading>Boots</Heading>
        <div style={style} className="boots">
          {Object.keys(this.props.boots).map(key => {
            const boot: BootInfo = this.props.boots[key];
            return(
              <div className="boot-list-item mv1" key={boot.model}>
                <Link to={`boots/${key}`} className="link animate-bg hover-bg-green ph1">
                  <Text className="b">{boot.brand} </Text>
                  <Text>{boot.model}</Text>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
