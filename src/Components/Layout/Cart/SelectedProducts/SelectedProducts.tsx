import React, { useEffect } from 'react';
import { ProductSelected } from '../../../../Store/productSelected';
import { SelectedProduct } from './SelectedProduct';

import './SelectedProducts.css';

export type SelectedProductsProps = {
    selectedProducts: ProductSelected[];
    productPlusClick: (productSku: string) =>  void;
    productMinusClick: (productSku: string) => void;
    productRemoveClick: (productSku: string) => void;
}
const SelectedProducts = ({selectedProducts, productPlusClick, productMinusClick, productRemoveClick}: SelectedProductsProps) => {
    return (
        <ul className="selected-products__wrapper">
            {
                selectedProducts.map((selectedProduct, index) => 
                    <li key={index} className="mary-1 sing-product">
                        <SelectedProduct
                            removeClick={productRemoveClick}
                            plusClick={productPlusClick}
                            minusClick={productMinusClick}
                            selectedProduct={selectedProduct}/>
                    </li>
                )
            }
        </ul>
    )
};

export default SelectedProducts