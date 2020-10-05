import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyAcWvgOGCwztFsPCSsA1gpyWFrSfotR5AI",
   authDomain: "mikebotens.firebaseapp.com",
   databaseURL: "https://mikebotens.firebaseio.com",
   projectId: "mikebotens",
   storageBucket: "mikebotens.appspot.com",
   messagingSenderId: "408848332042",
   appId: "1:408848332042:web:ac2399329f8bd72c9736f3",
   measurementId: "G-R97RMFFQ1K"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();