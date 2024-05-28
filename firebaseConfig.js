import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://console.firebase.google.com/project/classcom-58bc2/firestore/databases/-default-/data/~2F',
  projectId: '(default)',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);