import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB85A1BJXPu1mHNfXmY2Ea1aN7yrivE_vI",
    authDomain: "zippypay-c635d.firebaseapp.com",
    databaseURL: "https://zippypay-c635d.firebaseio.com",
    projectId: "zippypay-c635d",
    storageBucket: "zippypay-c635d.appspot.com",
    messagingSenderId: "819851855232",
    appId: "1:819851855232:web:0cfaf9b93afa55dba5ed65",
    measurementId: "G-H3BSH8H11K"
  };

let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// window.recaptchaVerifier = firebase.auth.RecaptchaVerifier(
//   "recaptcha-container",
//   {
//     size: "normal",
    // callback: function(response) {
    //   submitPhoneNumberAuth();
    // }
//   }
// );

//export const PhoneAuth = window.recaptchaVerifier;

// avoid deprecated warnings
// db.settings({
// 	timestampsInSnapshots: true
// })

export default Firebase