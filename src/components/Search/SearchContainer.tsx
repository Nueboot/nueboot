import qs from 'query-string';
import { connect, MapStateToProps } from 'react-redux';

import { State } from 'state/types';
import { findBoots } from '../../state/Boots/selectors';
import Search, { StateProps } from './Search';

const mapStateToProps: MapStateToProps<StateProps, {}, {}> = (
  state: State,
  props
) => {
  const query = state.router.location
    ? qs.parse(state.router.location.search).q
    : null;
  if (query) {
    return {
      query,
      boots: findBoots(state, query),
    };
  }
  return {
    query: '',
    boots: [],
  };
};

export default connect(mapStateToProps)(Search);
