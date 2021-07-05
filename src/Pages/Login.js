import React, { useState } from 'react'
import './Login.css'
// import { signInWithGoogle } from './../Firebase.js'

function Login() {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    // const signInWithEmailAndPasswordHandler = 
    //         (event,email, password) => {
    //             event.preventDefault();
    // };

    //   const onChangeHandler = (event) => {
    //       const {name, value} = event.currentTarget;

    //       if(name === 'userEmail') {
    //           setEmail(value);
    //       }
    //       else if(name === 'userPassword'){
    //         setPassword(value);
    //       }
    //   };

    return (
        <div className="login">
             {/* <h1>Sign in with email</h1><br></br>

             {error !== null && <div className = "error">{error}</div>}

             <form className="">
                <label htmlFor="userEmail" className="block">
               Email:
                </label>
                <input
                    type="email"
                    className="my-1 p-1 w-full"
                    name="userEmail"
                    value = {email}
                    placeholder="E.g: faruq123@gmail.com"
                    id="userEmail"
                    onChange = {(event) => onChangeHandler(event)}
                />
                <label htmlFor="userPassword" className="block">
                    Password:
                </label>
                <input
                    type="password"
                    className="mt-1 mb-3 p-1 w-full"
                    name="userPassword"
                    value = {password}
                    placeholder="Your Password"
                    id="userPassword"
                    onChange = {(event) => onChangeHandler(event)}
                />
                <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
                    Sign in
                </button>
            </form>


            <button className="google-login" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
                <span> Continue with Google</span>
            </button> */}
         </div>
    )
}

export default Login
