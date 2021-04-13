import firebase from 'firebase'
import '@firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA2eXeQWpUiYJMAVJIFvALDiwjQL57rjoY",
    authDomain: "todolistapp-17a98.firebaseapp.com",
    projectId: "todolistapp-17a98",
    storageBucket: "todolistapp-17a98.appspot.com",
    messagingSenderId: "941622748596",
    appId: "1:941622748596:web:09d5fe99128dec7195fee1"
  };

firebase.initializeApp(firebaseConfig)

export const database=firebase.firestore()
