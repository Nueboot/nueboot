import React from 'react';

import { BootInfo } from 'api/types';
import BootCard from 'components/BootCard';
import styled from 'styled-components';

export interface BootsViewProps {
  boots: BootInfo[];
}

class BootsView extends React.Component<BootsViewProps> {
  public render() {
    const boots = this.props.boots;
    return (
      <div className="boots">
        {boots.map(boot => (
          <BootCardContainer key={boot.id}>
            <BootCard boot={boot} />
          </BootCardContainer>
        ))}
      </div>
    );
  }
}

export default BootsView;

const BootCardContainer = styled.div`
  margin-bottom: 1rem;
  padding: 0.25rem;
  :hover {
    opacity: 0.7;
  }
`;
