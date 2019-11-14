import firebase from "../lib/firebase";
import { Boot } from "../types/boots";

let cache: Boot[] | null = null;

async function getBoots() {
  return firebase
    .database()
    .ref("boots")
    .once("value")
    .then(snapshot => (cache = snapshot.val()));
}

function readCache() {
  if (cache) {
    return cache;
  }
  throw getBoots();
}

export default {
  readCache,
  getBoots
};
