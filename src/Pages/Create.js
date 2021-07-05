import React from 'react';
import './Create.css';

function Create() {
    return (
        <div className="create">
            <div className="container">
                <div className="top">
                    <div>
                        <h2>Create Blog</h2>
                    </div>
                    <div className="right">
                        <div className="edit">
                            <button data-text="Edit" className="edit-button" type="button" aria-current="page">Edit</button>
                        </div>
                        <div className="preview">
                            <button data-text="Edit" className="preview-button" type="button" aria-current="page">Preview</button>
                        </div>
                    </div>
                </div>
                <div className="blogspace">
                    <div className="Title">
                        <textarea className="title" type="text" placeholder="New post title here..." autoComplete="off" data-gramm_editor="false" aria-label="Post Title" autoFocus autoresize="true"></textarea>
                    </div>
                    <div className="blog-content">
                        <textarea className="Post_Content" name="body_markdown" placeholder="Write your post content here..." data-gramm_editor="false" autoFocus data-mention-autocomplete-active="true"></textarea>
                    </div>
                </div>
                <div className="publish">
                    <button type="submit">Publish</button>
                </div>
            </div>
        </div>
    )
}

export default Create
