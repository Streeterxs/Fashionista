import React, { useState } from 'react';

import { Header } from "./Header";
import SideSearch from './SideModal/SideModal';
import Search from './Search/Search';

const Layout = ({children}: any) => {
    const [showSearch, setShowSearch] = useState(false);
    const [showBag, setShowBag] = useState(false);

    const handleClickBackdrop = (setFn: (bool: boolean) => void) => {
        setFn(false);
    }

    return (
        <>
            <div>
                <Header searchClick={()=> setShowSearch(prev => {
                    console.log('prev: ', prev);
                    return !prev
                })} bagClick={() => 'testing 2'}/>
            </div>
            <article>
                {children}
            </article>
            {
                showSearch ?
                <Search showSearch={showSearch} closeSearch={() => handleClickBackdrop(setShowSearch)}/> :
                null
            }
        </>
    )
};

export default Layout;
