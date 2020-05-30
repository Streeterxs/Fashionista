import React from 'react';

import './Backdrop.css'

const Backdrop = ({show, clicked, children}: any) => {
    return (
        show ?
        <>
            <div onClick={clicked} className="backdrop">
                {children}
            </div>
        </> :
        null
    )
}

export default Backdrop;