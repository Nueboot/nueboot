export interface ModalState {
  modalType: ModalTypes | null;
}

export type ModalTypes = 'login' | 'signup' | 'reset';
