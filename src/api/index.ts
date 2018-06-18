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

export type GetData = <T>(path: string) => Promise<T>;

export const getData: GetData = <T>(path) => {
  return new Promise(res => {
    firebase.database().ref(path).once('value').then(snapshot => {
      res(snapshot.val());
    });
  });
};

export const currentUser = () => {
  return firebase.auth().currentUser;
};

export const setBoot = (bootInfo: BootInfo) => {
  return writeData('/boots', bootInfo);
};

export const updateBoot = (id: number, data: Partial<BootInfo>) => {
  return updateData(`/boots/${id}`, data);
};

export type GetAllBoots = () => Promise<BootInfo[]>;

export const getAllBoots: GetAllBoots = () => getData('boots');

export type GetBoot = (id: string) => Promise<BootInfo>;

export const getBoot: GetBoot = id => getData(`boots/${id}`);
