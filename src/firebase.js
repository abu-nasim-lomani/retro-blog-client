import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCpXTe2d0Y4Un-92ggG19NkLm-Jykd0FL8",
    authDomain: "retro-blog-2f09f.firebaseapp.com",
    projectId: "retro-blog-2f09f",
    storageBucket: "retro-blog-2f09f.appspot.com",
    messagingSenderId: "46445021095",
    appId: "1:46445021095:web:3c5e3c566e6587090c5882"
  };
  // Initialize Firebase
const firebaseApp=  firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();
export {auth};
export default db