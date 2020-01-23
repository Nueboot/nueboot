import { app } from "../lib/firebase";
import { Boot } from "../types/boots";

export interface BootCache {
  [key: string]: Boot;
}

export let cache: BootCache | null = null;

async function getBoots() {
  return app
    .database()
    .ref("boots")
    .once("value")
    .then(snapshot => (cache = Object.assign({}, snapshot.val())));
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
