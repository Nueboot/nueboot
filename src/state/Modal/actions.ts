import { ModalTypes } from './types';

export interface OpenModalAction {
  readonly type: 'MODAL.OPEN_MODAL';
  readonly payload: { type: ModalTypes };
}

export type OpenModal = (type: ModalTypes) => OpenModalAction;

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
