import firebase from "../lib/firebase";
import { cache as bootCache } from "./boots";

const cache = bootCache || {};

async function getBoot(id: string) {
  return firebase
    .database()
    .ref(`boots/${id}`)
    .once("value")
    .then(snapshot => (cache[id] = snapshot.val()));
}

function readCache(id: string) {
  if (cache[id]) {
    return cache[id];
  }
  throw getBoot(id);
}

export default {
  readCache,
  getBoot
};
