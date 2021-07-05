import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom'
import { auth } from '../Firebase';

function Navbar() {

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() =>{

        auth.onAuthStateChanged((authUser) =>{
            if(authUser){
                setUser(authUser);

                if(authUser.displayName){

                }
                else{
                    return authUser.updateProfile({
                        displayName: username,
                    })
                }
            }
           
            else{
                setUser(null);
            }
        })
    }, [user, username]);

    return (
        <div className="navbar">

            {user ?
            <div className="user-nav">
                <div>
                    <Link to="/profile">
                        <div className="profile">
                            <img className="profile_image" src = "/resources/girl.png" alt="profile" />
                        </div>
                    </Link>
                    <div className="/search">
                        <img className="search_image" src = "/resources/search.png" alt="search" />
                    </div>
                    <Link to="/create">
                        <div className="add">
                            <img className="add_image" src = "/resources/plus.png" alt="new" />
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="home">
                            <img className="home_image" src = "/resources/home.png" alt="home" />
                        </div>
                    </Link>
                </div>
                
                <div>
                    <div className="menu">
                        <img className="menu_image" src = "./resources/menu.png" alt="menu" />
                    </div>
                </div>
            </div>

            : 
            <div className="non-usernav">

                <Link to="/">
                    <div className="home">
                        <img className="home_image" src = "/resources/home.png" alt="home" />
                    </div>
                </Link>
                
                <Link to="/signin">
                    <div className="signin">
                        <img className="login_image" src = "/resources/google.png" alt="google" />
                    </div>
                </Link>
            </div>
            }

        </div>
    )
}

export default Navbar
