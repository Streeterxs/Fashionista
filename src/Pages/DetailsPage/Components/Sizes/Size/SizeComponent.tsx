import React from 'react';
import { Size } from '../../../../../Store/size';

import './SizeComponent.css'


type SizeProps = {
    sizeObj: Size,
    handleSizeClick: (sizeSku: string) => void,
    selected: boolean
};

const SizeComponent = ({sizeObj, handleSizeClick, selected}: SizeProps) => {
    return (
        <button className={`size-button ${selected ? 'selected' : ''}`} onClick={() => handleSizeClick(sizeObj.sku)}>
            <b>
                {sizeObj.size}
            </b>
        </button>
    );
};

export default SizeComponent;