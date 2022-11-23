import React from 'react';
import "./posts.css"
import { Link } from "react-router-dom";

const Feed = ({ posts }) => {
    return (
        <main className='posts'>
            {posts.map(post => (
                <article key={post.id}>
                    <Link to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <div className="description">
                        <p className="postBody"> {
                            (post.body).length <= 150
                                ? post.body
                                : `${(post.body).slice(0, 150)}...`}
                        </p>
                        <h4>{post.date}</h4>
                    </div>
                </article>
            ))}
        </main>
    )
}

export default Feed
