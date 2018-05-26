import { AuthTypes } from '../Session/types';

export interface OpenModalAction {
  readonly type: 'MODAL.OPEN_MODAL';
  readonly payload: { type: AuthTypes };
}

export type OpenModal = (type: AuthTypes) => OpenModalAction;

export const openModal: OpenModal = type => ({
  type: 'MODAL.OPEN_MODAL',
  payload: {
    type,
  },
});

export interface CloseModalAction {
  readonly type: 'MODAL.CLOSE_MODAL';
}

export type CloseModal = () => CloseModalAction;

export const closeModal: CloseModal = () => ({
  type: 'MODAL.CLOSE_MODAL',
});
