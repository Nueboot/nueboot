import { connect } from 'react-redux';
import { getBoot } from 'state/Boots/actions';
import { bootLoading, byId } from 'state/Boots/selectors';
import { State } from 'state/types';
import Boot, { DispatchProps, Props, StateProps } from './Boot';

export const mapStateToProps = (state: State, props: Props): StateProps => ({
  boot: byId(state, props.match.params.bootId),
  loading: bootLoading(state),
});

export const mapDispatchToProps = (dispatch, props: Props): DispatchProps => ({
  getBoot: () => dispatch(getBoot(props.match.params.bootId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Boot);
