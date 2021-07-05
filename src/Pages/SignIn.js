import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { auth } from './../Firebase.js'


function SignIn() {

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);

    firebase.auth()
        .getRedirectResult()
        .then((result) => {
            if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
        
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // ...
        }
        // The signed-in user info.
        var user = result.user;
        }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
    return (
        <div>
            {/* <Link to="/SignIn">
                <button className="google-login" onClick={signInWithRedirect}>
                    <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                    <span> Continue with Google</span>
                </button>
            </Link> */}
        </div>
    )
}

export default SignIn
