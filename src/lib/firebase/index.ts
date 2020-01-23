import firebaseApp from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyDWHl06j32I3-4n9igIKGpcKdaqOb7PwTo",
  authDomain: "nueboot.com",
  databaseURL: "https://nueboot-app.firebaseio.com",
  messagingSenderId: "23567420237",
  projectId: "nueboot-app",
  storageBucket: "nueboot-app.appspot.com"
};

const app = firebaseApp.initializeApp(config);

export { app, database };
