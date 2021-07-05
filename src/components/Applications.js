import React from 'react';

import {
    BrowserRouter as Router,
  } from "react-router-dom";

import ProfilePage from './Pages/ProfilePage';
import SignIn from'./Pages/SignIn';
import SignUp from './Pages/SignUp';



function Applications() {
    const user = null;
    return (
        <div>
            user ?
            <ProfilePage />
        :
            <Router>
                {/* <SignUp path="signUp" /> */}
                <SignIn path="signIn" />
            </Router>
        </div>
    )
}

export default Applications
