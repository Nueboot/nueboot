import firebase from '../lib/firebase';

import { BootInfo, BootReview } from './types';

export type FirebaseWrite = (path: string, data: {}) => Promise<any>;

// export const writeData: FirebaseWrite = (path, data) => {
//   return firebase.database().ref(path).set({
//     ...data,
//   });
// };

export const updateData: FirebaseWrite = (path, data) => {
  return firebase
    .database()
    .ref(path)
    .transaction(currentData => {
      if (currentData !== null) {
        return { ...data };
      } else {
        throw new Error(`Boot at ${path} does not exist`);
      }
    });
};

export type GetData = <T>(path: string) => Promise<T>;

export const getData: GetData = <T>(path) => {
  return firebase
    .database()
    .ref(path)
    .once('value')
    .then(snapshot => snapshot.val());
};

export const currentUser = () => {
  return firebase.auth().currentUser;
};

export const addBoot = (bootInfo: BootInfo) => {
  const newBoot = firebase
    .database()
    .ref('/boots/')
    .push();
  return newBoot.set(bootInfo);
};

export const updateBoot = (id: number, data: Partial<BootInfo>) => {
  return updateData(`/boots/${id}`, data);
};

export type GetAllBoots = () => Promise<BootInfo[]>;

export const getAllBoots: GetAllBoots = () => getData('boots');

export type GetBoot = (id: string) => Promise<BootInfo>;

export const getBoot: GetBoot = id => getData(`boots/${id}`);

export const addReview = (review: BootReview, user) => {
  const newReview = firebase
    .database()
    .ref(`/reviews/${review.id}`)
    .push();

  return newReview.set({
    body: review.body,
    stars: review.stars,
    user,
  });
};

export const fetchBootReview = (id: string) => getData(`/reviews/${id}`);
