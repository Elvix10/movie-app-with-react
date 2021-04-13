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


export default class Fire {
    init(){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user=>{
            if(user){

            } else{
                firebase.auth().signInAnonymously().catch(error =>{})
            }
        })
    }
}