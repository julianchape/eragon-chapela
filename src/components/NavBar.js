import React from 'react';
import './NavBar.css';
import logo from './logo.svg';

export const NavBar = () => {

    return (
        <nav>
            <a href="#"><img src={logo} alt="Eragon"/></a>
            <div class="hamburguesa"><input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul>
                    <li><a href="#nosotros">NOSOTROS</a></li>
                    <li><a href="#mangas">MANGAS</a></li>
                    <li><a href="#carrito">CARRITO</a></li>
                </ul>
            </div>
        </nav>
    )
}