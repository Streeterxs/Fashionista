import React, { useState } from 'react';
import { Size } from '../../../../Store/size';

import { SizeComponent } from '.';
import './Sizes.css'

export type SizesProps = {
    sizes: Size[]
}
const Sizes = ({sizes}: SizesProps) => {
    const [sizeSelected, setSizeSelected] = useState<string>('');

    const handleSizeSelection = (sizeSku: string) => {
        setSizeSelected(sizeSku);
    }

    return (
        <ul className="size-list">
            {
                sizes ? sizes.map((size, index) => 
                    <li className='marr-1' key={size.sku}>
                        <SizeComponent sizeObj={size} selected={size.sku === sizeSelected} handleSizeClick={handleSizeSelection}/>
                    </li>
                ) : null
            }
        </ul>
    )
};

export default Sizes;