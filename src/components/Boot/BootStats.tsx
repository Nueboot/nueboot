import { BootInfo } from 'api/types';
import React from 'react';
import styled from 'styled-components';
import { Text } from '../Styled';

interface BootStatsProps {
  releaseDate: BootInfo['releaseDate'];
  weight: BootInfo['weight'];
  material: BootInfo['material'];
  msrp: BootInfo['msrp'];
}

const BootStatsContainer = styled.div`
  margin-top: 1.5rem;
`;

const BootStatsRow = styled.div`
  border-bottom: 1px solid rgb(200, 200, 200);
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const BoldText = styled(Text)`
  font-weight: bold;
`;

const BootStats: React.SFC<BootStatsProps> = props => {
  return (
    <BootStatsContainer className="boot-stats">
      {props.material && (
        <BootStatsRow className="boot-stats-row">
          <BoldText>Material</BoldText>
          <Text>{props.material}</Text>
        </BootStatsRow>
      )}
      {props.releaseDate && (
        <BootStatsRow className="boot-stats-row">
          <BoldText>Release Date (M/D/Y)</BoldText>
          <Text>{props.releaseDate}</Text>
        </BootStatsRow>
      )}
      {props.weight && (
        <BootStatsRow className="boot-stats-row">
          <BoldText>Weight</BoldText>
          <Text>{props.weight} oz</Text>
        </BootStatsRow>
      )}
      {props.msrp && (
        <BootStatsRow className="boot-stats-row">
          <BoldText>MSRP</BoldText>
          <Text>${props.msrp}</Text>
        </BootStatsRow>
      )}
    </BootStatsContainer>
  );
};

export default BootStats;
