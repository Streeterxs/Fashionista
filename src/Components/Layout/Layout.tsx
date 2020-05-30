import React from 'react';

import { Header } from "./Header";

const Layout = ({children}: any) => {
    return (
        <>
            <div>
                <Header/>
            </div>
            <article>
                {children}
            </article>
        </>
    )
};

export default Layout;
