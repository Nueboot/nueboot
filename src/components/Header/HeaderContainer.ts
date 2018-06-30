import { connect } from 'react-redux';

import { openModal } from 'state/Modal/actions';
import { ModalTypes } from 'state/Modal/types';
import { logoutUser } from 'state/Session/actions';
import { isLoggedIn, isPending } from 'state/Session/selectors';
import { State } from 'state/types';

import Header, { DispatchProps, StateProps } from './Header';

export const mapStateToProps = (state: State): StateProps => ({
  loggedIn: isLoggedIn(state),
  pending: isPending(state),
});

export const mapDispatchToProps = (dispatch): DispatchProps => ({
  openModal: (modalType: ModalTypes) => dispatch(openModal(modalType)),
  logout: () => dispatch(logoutUser()),
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
