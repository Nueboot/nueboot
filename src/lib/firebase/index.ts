import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDWHl06j32I3-4n9igIKGpcKdaqOb7PwTo',
  authDomain: 'nueboot-app.firebaseapp.com',
  databaseURL: 'https://nueboot.com',
  projectId: 'nueboot-app',
  storageBucket: 'nueboot-app.appspot.com',
  messagingSenderId: '23567420237',
};

export default firebase.initializeApp(config);
