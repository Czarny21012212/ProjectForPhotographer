import React, { useEffect } from 'react';
import Logo from './logo.jsx';

const Header = () => {

    useEffect(() => {
        const handleScroll = () => {
            const all = document.getElementById("all");
            
            if (window.pageYOffset > 50) {
                all.classList.add("shrink");
            } else {
                all.classList.remove("shrink");
            }
        };

        // Dodanie event listenera dla scroll
        window.addEventListener('scroll', handleScroll);

        // Usuwanie event listenera po odmontowaniu komponentu
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="all" id="all">
            <div className="ul">
                <ul>
                <li><a href="#StronaGłówna">Strona Główna</a></li>
                <li><a href="#Cennik">Cennik</a></li>
                <li ><Logo /></li>
                <li><a href="#Galeria">Galeria</a></li>
                <li><a href="#Kontakt">Kontakt</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
