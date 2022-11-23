import React from 'react';
import "./newPost.css";

const NewPost = ({ newPostTitle, setNewPostTitle, newPostBody, setNewPostBody, handleSubmit }) => {
    return (
        <main className='setnewPost'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="text">Plese write some title: </label>
                <input type="text" id="title" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} />
                <label htmlFor="body">Plese insert your note here: </label>
                <textarea name="" id="body" value={newPostBody} onChange={(e) => setNewPostBody(e.target.value)}></textarea>
                <button className='btn' type="submit">Cofirm your note</button>
            </form>
        </main>
    )
}

export default NewPost