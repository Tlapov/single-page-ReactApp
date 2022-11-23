import React from 'react';
import "./home.css";
import { Outlet } from 'react-router-dom';
import Footer from "../footer/footer";
import Nav from "../nav/nav";

const Home = ({ search, setSearch }) => {
    return (
        <main className='home'>
            <Nav search={search} setSearch={setSearch}></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    )
}

export default Home;
