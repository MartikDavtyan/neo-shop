import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCC8E_97KUYGZOPRibCusOSHoYDC5xCAXw',
  authDomain: 'ait-brain-code.firebaseapp.com',
  databaseURL: 'https://ait-brain-code-default-rtdb.firebaseio.com',
  projectId: 'ait-brain-code',
  storageBucket: 'ait-brain-code.firebasestorage.app',
  messagingSenderId: '159759198772',
  appId: '1:159759198772:web:11da5b6a99790ddfa4f861',
  measurementId: 'G-RTQYY43VGS',
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
