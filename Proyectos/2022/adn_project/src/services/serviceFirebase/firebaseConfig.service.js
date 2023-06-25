import { initializeApp } from "firebase/app";

const {
  REACT_APP...: APIKEY,
  REACT_APP...: AUTHDOMAIN,
  REACT_APP...: PROJECTID,
  REACT_APP...: STORAGEBUCKET,
  REACT_APP...: MESSAGINGSENDERID,
  REACT_APP...: APPID,
  REACT_APP...: MEASUREMENTID,
} = process.env;

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
