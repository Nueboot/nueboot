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
    <div className="boot-stats mt4">
      {props.material && (
        <div className="boot-stats-row bb b--black-10 mb2">
          <span className="ttu f7 tracked b gray">Material</span>
          <span className="b f6 fr">{props.material}</span>
        </div>
      )}
      {props.releaseDate && (
        <div className="boot-stats-row bb b--black-10 mb2">
          <span className="ttu f7 tracked b gray">Release Date (M/D/Y)</span>
          <span className="b f6 fr">{props.releaseDate}</span>
        </div>
      )}
      {props.weight && (
        <div className="boot-stats-row bb b--black-10 mb2">
          <span className="ttu f7 tracked b gray">Weight</span>
          <span className="b f6 fr">{props.weight} oz</span>
        </div>
      )}
      {props.msrp && (
        <div className="boot-stats-row bb b--black-10 mb2">
          <span className="ttu f7 tracked b gray">MSRP</span>
          <span className="b f6 fr">${props.msrp}</span>
        </div>
      )}
    </div>
  );
};

export default BootStats;
