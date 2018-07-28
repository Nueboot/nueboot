import { connect } from 'react-redux';
import { allBoots, bootLoading } from 'state/Boots/selectors';
import { State } from 'state/types';
import Boots, { StateProps } from './Boots';

export const mapStateToProps = (state: State): StateProps => ({
  boots: allBoots(state),
  loading: bootLoading(state),
});

export default connect(mapStateToProps, {})(Boots);
