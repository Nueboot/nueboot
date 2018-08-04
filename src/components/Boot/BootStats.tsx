import { BootInfo } from 'api/types';
import React from 'react';

interface BootStatsProps {
  boot: BootInfo;
}

const BootStats: React.SFC<BootStatsProps> = props => {
  return(
    <div className="boot-stats mt4">
      <div className="boot-stats-row bb b--black-10 mb2">
        <span className="ttu f7 tracked b gray">Material</span>
        <span className="b f6 fr">{props.boot.material}</span>
      </div>
      <div className="boot-stats-row bb b--black-10 mb2">
        <span className="ttu f7 tracked b gray">Release Date</span>
        <span className="b f6 fr">{props.boot.releaseDate}</span>
      </div>
      <div className="boot-stats-row bb b--black-10 mb2">
        <span className="ttu f7 tracked b gray">Weight</span>
        <span className="b f6 fr">{props.boot.weight}</span>
      </div>
      <div className="boot-stats-row bb b--black-10 mb2">
        <span className="ttu f7 tracked b gray">MSRP</span>
        <span className="b f6 fr">{props.boot.msrp}</span>
      </div>
    </div>
  );
};

export default BootStats;
