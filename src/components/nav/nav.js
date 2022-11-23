import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";


const Nav = ({ search, setSearch }) => {
    return (
        <nav>
            <div className="pageTitle">
                <Link to="/">
                    My note react app
                </Link>
            </div>
            <div className="search">
                <label htmlFor="search">Search: </label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search your notes"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/post">Add new post</Link></li>
            </ul>
        </nav>
    )
}

export default Nav