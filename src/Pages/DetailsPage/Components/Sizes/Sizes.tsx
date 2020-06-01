import React, { useState } from 'react';
import { Size } from '../../../../Store/size';

import { SizeComponent } from '.';
import './Sizes.css'

export type SizesProps = {
    sizes: Size[],
    handleSizeSelected: (sizeSelected: Size) => void
}
const Sizes = ({sizes, handleSizeSelected}: SizesProps) => {
    const [sizeSelected, setSizeSelected] = useState<Size>();

    const handleSizeSelection = (size: Size) => {
        setSizeSelected(size);

        if(size.sku !== sizeSelected?.sku) handleSizeSelected(size);
    }

    return (
        <>
            <ul className="size-list">
                {
                    sizes ? sizes.map((size, index) =>
                        {
                            return (
                                size.available ?
                                <li className='marr-1' key={size.sku}>
                                    <SizeComponent sizeObj={size} selected={size.sku === (sizeSelected?.sku)} handleSizeClick={handleSizeSelection}/>
                                </li> :
                                null
                            )
                        }
                    ) : null
                }
            </ul>
        </>
    )
};

export default Sizes;