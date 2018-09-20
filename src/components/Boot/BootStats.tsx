import { BootInfo } from 'api/types';
import React from 'react';

interface BootStatsProps {
  releaseDate: BootInfo['releaseDate'];
  weight: BootInfo['weight'];
  material: BootInfo['material'];
  msrp: BootInfo['msrp'];
}

const BootStats: React.SFC<BootStatsProps> = props => {
  return (
    <div className="boot-stats">
      {props.material && (
        <div className="boot-stats-row">
          <span>Material</span>
          <span>{props.material}</span>
        </div>
      )}
      {props.releaseDate && (
        <div className="boot-stats-row">
          <span>Release Date (M/D/Y)</span>
          <span>{props.releaseDate}</span>
        </div>
      )}
      {props.weight && (
        <div className="boot-stats-row">
          <span>Weight</span>
          <span>{props.weight} oz</span>
        </div>
      )}
      {props.msrp && (
        <div className="boot-stats-row">
          <span>MSRP</span>
          <span>${props.msrp}</span>
        </div>
      )}
    </div>
  );
};

export default BootStats;
