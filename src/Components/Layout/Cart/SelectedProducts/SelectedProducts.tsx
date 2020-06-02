import React, { useEffect } from 'react';
import { ProductSelected } from '../../../../Store/productSelected';
import { SelectedProduct } from './SelectedProduct';

import './SelectedProducts.css';

export type SelectedProductsProps = {
    selectedProducts: ProductSelected[]
}
const SelectedProducts = ({selectedProducts}: SelectedProductsProps) => {
    return (
        <ul className="selected-products__wrapper">
            {
                selectedProducts.map((selectedProduct, index) => 
                    <li key={index} className="mary-1">
                        <SelectedProduct selectedProduct={selectedProduct}/>
                    </li>
                )
            }
        </ul>
    )
};

export default SelectedProducts