import React, { useEffect } from 'react';
import "./editPost.css";
import { useParams } from 'react-router-dom';

const EditPost = ({ posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit }) => {
    const { id } = useParams();
    const item = posts.find((post) => (post.id).toString() === id)

    useEffect(() => {
        setEditTitle(item.title)
        setEditBody(item.body)
    }, [posts, setEditBody, setEditTitle])

    return (
        <main className='editPost'>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="text">Plese write some title: </label>
                <input type="text" id="title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                <label htmlFor="body">Plese insert your note here: </label>
                <textarea name="" id="body" value={editBody} onChange={(e) => setEditBody(e.target.value)}></textarea>
                <button className='btn' type="submit" onClick={() => handleEdit(item.id)} >Edit your note</button>
            </form>
        </main>
    )
}

export default EditPost