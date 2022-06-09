import React from 'react';
import {Logo} from "../../images/logo";
import '../../styles/Header.css'

const Header  = () => {
    return (
        <header>
            <Logo/>
            <div>
                <span>{sessionStorage.getItem('user')}</span>
                <a href='/' onClick={() => {sessionStorage.removeItem('user')}}>
                    Logout
                </a>
            </div>
        </header>
    )
}

export default Header
