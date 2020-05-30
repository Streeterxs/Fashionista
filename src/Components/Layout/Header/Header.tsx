import React from 'react'

const Header = () => {
    return (
        <nav className="display-flex justify-spaced align-center padx-1 nav__logo">
            <div>
                <h1>Fashionista</h1>
            </div>

            <ul className="display-flex justify-center align-center nav__list">
                <li>Search</li>
                <li>bag</li>
            </ul>
        </nav>
    )
};

export default Header;