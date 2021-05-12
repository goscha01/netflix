import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
// import { seedDatabase } from './seed';

const config = {
    apiKey: "AIzaSyC0YFs-TNxHHKc33_1a2tZ0S_XwU2LYS7s",
    authDomain: "netflix-e1a26.firebaseapp.com",
    databaseURL: "https://netflix-e1a26-default-rtdb.firebaseio.com",
    projectId: "netflix-e1a26",
    storageBucket: "netflix-e1a26.appspot.com",
    messagingSenderId: "205160454207",
    appId: "1:205160454207:web:88682941134170cf87008a",
    measurementId: "G-CL3J47EZGX"
}

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root')
);
