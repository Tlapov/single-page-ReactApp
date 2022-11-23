import React from 'react';
import "./footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>Ovo je izradio Lapov Toni {year} </footer>
    )
}

export default Footer