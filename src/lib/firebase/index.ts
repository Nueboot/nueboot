import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDWHl06j32I3-4n9igIKGpcKdaqOb7PwTo',
  authDomain: 'nueboot.com',
  databaseURL: 'https://nueboot-app.firebaseio.com',
  messagingSenderId: '23567420237',
  projectId: 'nueboot-app',
  storageBucket: 'nueboot-app.appspot.com',
};

export default firebase.initializeApp(config);
