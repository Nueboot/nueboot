import { connect, Dispatch } from 'react-redux';

import { openModal } from 'state/Modal/actions';
import { AuthTypes } from 'state/Session/types';

import { isLoggedIn, isPending } from 'state/Session/selectors';
import { State } from 'state/types';
import Header, { DispatchProps, StateProps } from './Header';

export type MapStateToProps = (state: State) => StateProps;

export const mapStateToProps: MapStateToProps = state => ({
  loggedIn: isLoggedIn(state),
  pending: isPending(state),
});

export type MapDispatchToProps = (dispatch: Dispatch<State>) => DispatchProps;

export const mapDispatchToProps: MapDispatchToProps = dispatch => ({
  openModal: (modalType: AuthTypes) => dispatch(openModal(modalType)),
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
