import React, { useState, useEffect } from 'react';

import { Header } from "./Header";
import SideSearch from './SideModal/SideModal';
import Search from './Search/Search';
import Cart from './Cart/Cart';

const Layout = ({children}: any) => {
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        console.log('layout rendered');
    });

    const handleClickBackdrop = (setFn: (bool: boolean) => void) => {
        setFn(false);
    }

    return (
        <>
            <div>
                <Header searchClick={()=> setShowSearch(prev => {
                    console.log('prev: ', prev);
                    return !prev
                })} cartClick={() => setShowCart(prev => {
                    console.log('prev: ', prev)
                    return !prev
                })}/>
            </div>
            <article className="container">
                {children}
            </article>
            {
                showSearch ?
                <Search showSearch={showSearch} closeSearch={() => handleClickBackdrop(setShowSearch)}/> :
                null
            }
            {
                showCart ?
                <Cart showCart={showCart} closeCart={() => handleClickBackdrop(setShowCart)}/> :
                null
            }
        </>
    )
};

export default Layout;
