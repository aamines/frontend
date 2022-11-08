import { initializeApp } from "firebase/app";

//firebase configs
const firebaseConfig = {
  apiKey: "AIzaSyBIZRxlR1O-rwrOS3vhS6B8-nQFFjOvVqg",
  authDomain: "projectia-353605.firebaseapp.com",
  projectId: "projectia-353605",
  storageBucket: "projectia-353605.appspot.com",
  messagingSenderId: "44349966329",
  appId: "1:44349966329:web:d3e05f6a23e5575419df28",
  measurementId: "G-13295FC355",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
