import { connect, Dispatch } from 'react-redux';

import { openModal } from 'state/Modal/actions';
import { AuthTypes } from 'state/Session/types';

import { State } from 'state/types';
import Header, { DispatchProps } from './Header';

export type MapDispatchToProps = (dispatch: Dispatch<State>) => DispatchProps;

export const mapDispatchToProps: MapDispatchToProps = dispatch => ({
  openModal: (modalType: AuthTypes) => dispatch(openModal(modalType)),
});

const HeaderContainer = connect(mapDispatchToProps)(Header);

export default HeaderContainer;
