import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.css';
import { RootState } from '../../../Store/store';

type HeaderProps = {
    searchClick: () => void,
    cartClick: () => void
};

const Header = ({searchClick, cartClick}: HeaderProps) => {
    const {cartReducer} = useSelector((state: RootState) => state);
    return (
        <nav className="fixed-top navbar">
            <div className="display-flex justify-spaced align-center pad-1 padx-4 nav__logo border-box nav__wrapper container">
                <Link to="/">
                    <h1 className="mar-0">Fashionista</h1>
                </Link>
                <ul className="display-flex justify-center align-center nav__list mar-0 nav__list">
                    <li className="cursor-pointer marx-2" onClick={searchClick}><FontAwesomeIcon icon={faSearch} /></li>
                    <li className="cursor-pointer pos-relative" onClick={cartClick}>
                        <FontAwesomeIcon icon={faShoppingBag}/>
                        <span className="nav__cart-badge-wrapper">
                            <span className="nav__cart-badge">
                                <b>
                                    {cartReducer.totalProductSelected}
                                </b>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;