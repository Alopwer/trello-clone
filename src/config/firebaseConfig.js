import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAPMWs7OSURz252YaAhslT4STbMr2KwJ-I",
    authDomain: "trello-3f8aa.firebaseapp.com",
    databaseURL: "https://trello-3f8aa.firebaseio.com",
    projectId: "trello-3f8aa",
    storageBucket: "trello-3f8aa.appspot.com",
    messagingSenderId: "41916260630",
    appId: "1:41916260630:web:5805bc2bd1c53432c7f037",
    measurementId: "G-4W9TLYYTQZ"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebaseConfig