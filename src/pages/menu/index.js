import React from 'react';
import './styles.css';
import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Menu(){
 
    return (       

    <div class="header">
        <img src={logoImg} alt = "Be The Hero"/>
        <h2 class="logo">EstudePass</h2>
        <input type="checkbox" id="bt_menu"/>
        <label for = "bt_menu" class="show-menu-btn">&#9776;</label> 

        <ul class="menu">
            <a href="#">Início</a>         
            <a href="#">Assine</a>
            <a href="#">Parceiros</a>
            <a href="#">Quem Somos</a>
            <a href="#">Entrar</a>
            <label for="bt_menu" class="hide-menu-btn">&times;</label> 
        </ul>
    </div>
    );
}