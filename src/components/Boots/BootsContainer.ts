import { connect } from 'react-redux';
import { getAllBoots } from 'state/Boots/actions';
import { allBoots, bootLoading } from 'state/Boots/selectors';
import { State } from 'state/types';
import Boots, { DispatchProps, StateProps } from './Boots';

export const mapStateToProps = (state: State): StateProps => ({
  boots: allBoots(state),
  loading: bootLoading(state),
});

export const mapDispatchToProps = (dispatch): DispatchProps => ({
  getBoots: () => dispatch(getAllBoots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Boots);
