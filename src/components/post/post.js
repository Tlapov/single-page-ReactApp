import React from 'react';
import { useParams, Link } from 'react-router-dom';
import "./post.css";

const Post = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className='itemPost'>
            {post && (
                <article item>
                    <h2>{post.title}</h2>
                    <small>{post.date}</small>
                    <div className="description">
                        <p className="postBody">
                            {post.body}
                        </p>
                    </div>
                    <button><Link to={`/edit/${id}`}>Edit note</Link></button>
                    <button onClick={() => handleDelete(post.id)}>Delete post</button>
                </article>
            )}
            {!post && (
                <h2>Post Not Found</h2>
            )}
        </main>
    )
}

export default Post