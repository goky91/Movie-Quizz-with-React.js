import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className='footer'>
            <div>Copyright Goran Spasojevic {currentYear}</div>
            <div>Movies database powered by TMDB API</div>
        </footer>
    );
}

export default Footer;