import React from 'react';
import { ProductSelected } from '../../../../Store/productSelected';

export type SelectedProductsProps = {
    selectedProducts: ProductSelected[]
}
const SelectedProducts = ({selectedProducts}: SelectedProductsProps) => {
    return (
        <div>
            products
        </div>
    )
};

export default SelectedProducts