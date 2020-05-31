import React from 'react'

type HeaderProps = {
    searchClick: () => void,
    cartClick: () => void
};

const Header = ({searchClick, cartClick}: HeaderProps) => {
    return (
        <nav className="display-flex justify-spaced align-center padx-1 nav__logo border-box">
            <div>
                <h1>Fashionista</h1>
            </div>

            <ul className="display-flex justify-center align-center nav__list">
                <li className="cursor-pointer" onClick={searchClick}>Search</li>
                <li className="cursor-pointer" onClick={cartClick}>bag</li>
            </ul>
        </nav>
    )
};

export default Header;