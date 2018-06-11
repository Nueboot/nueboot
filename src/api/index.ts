import firebase from '../lib/firebase';

import { BootInfo } from './types';

export type FirebaseWrite = (path: string, data: {}) => Promise<any>;

export const writeData: FirebaseWrite = (path, data) => {
  return firebase.database().ref(path).set({
    ...data,
  });
};

export const updateData: FirebaseWrite = (path, data) => {
  return firebase.database().ref(path).transaction(currentData => {
    if (currentData !== null) {
      return { ...data };
    }
  });
};

export const currentUser = () => {
  return firebase.auth().currentUser;
};

export const setBoot = (bootInfo: BootInfo) => {
  writeData('/boots', bootInfo);
};

export const updateBoot = (id: number, data: Partial<BootInfo>) => {
  updateData(`/boots/${id}`, data);
};
