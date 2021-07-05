import React, { useState, useEffect } from 'react';
import "./Body.css";
import Blogcard from './Blogcard';
import { db } from '../Firebase'

function Body() {

    const [blogcard, setBlogcard] = useState([])

    useEffect(() => {
        db.collection('blogs').onSnapshot(snapshot => {
            setBlogcard(snapshot.docs.map(doc => doc.data()));
        })
    }, []);

    return (
        <div className="body">
            <div className="header">
                <h1>Today's trending</h1>
            </div>
            <div className="bloglist">              
                <Blogcard blogcard={blogcard} />                                       
            </div>
        </div>
    )
}

export default Body
