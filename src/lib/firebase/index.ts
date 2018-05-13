import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDWHl06j32I3-4n9igIKGpcKdaqOb7PwTo',
  authDomain: 'nueboot-app.firebaseapp.com',
  databaseURL: 'https://nueboot-app.firebaseio.com',
  messagingSenderId: '23567420237',
  projectId: 'nueboot-app',
  storageBucket: 'nueboot-app.appspot.com',
};

firebase.initializeApp(config);

export default firebase;
