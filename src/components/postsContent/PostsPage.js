import React from 'react';
import Feed from "./feed";

const PostsPage = ({ posts }) => {
    return (
        <>
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </>
    )
}

export default PostsPage