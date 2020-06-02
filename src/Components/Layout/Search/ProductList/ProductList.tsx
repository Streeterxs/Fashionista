import React from 'react';

import { Product } from '../../../../Store/product';
import { ProductSearchable } from './ProductSearchable';

import './ProductList.css'

type ProductListProps = {
    productArray: Product[]
}
const ProductList = ({productArray}: ProductListProps) => {
    return (
        <ul className="products-list__wrapper">
            {
                productArray.map((product) => {
                    return (
                        <li key={product.code_color} className="mary-1 sing-product">
                            <ProductSearchable selectedProduct={product}/>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default ProductList;