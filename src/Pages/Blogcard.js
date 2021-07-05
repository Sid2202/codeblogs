import React from 'react'
import './Blogcard.css'

function Blogcard(props) {

    const blogcard = props.blogcard;
    return (
        <div className="blogcard">
            {blogcard.map((blog) => (
                    <div className="container">
                        <div className="blogcard_tab">
                            <div className="text_content">
                                <text className="author">By {blog.author}</text>
                                <text>{blog.topic}</text>
                            </div>
                            <div className="image_content">
                                <img className="image" src="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=100" alt="blog" />
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Blogcard
