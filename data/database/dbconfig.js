import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyAs4M5n8LhDN45LYPbUv4JWBytGS9dZ-xk",
  authDomain: "reactnativedb-a3691.firebaseapp.com",
  databaseURL: "https://reactnativedb-a3691.firebaseio.com",
  projectId: "reactnativedb-a3691",
  storageBucket: "reactnativedb-a3691.appspot.com",
  messagingSenderId: "398312355689",
  appId: "1:398312355689:web:352a59bfeb268ef2b6aff8",
  measurementId: "G-X1NTLW577E"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
