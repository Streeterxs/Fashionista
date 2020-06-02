import React, { useEffect } from 'react';

import {Product} from './Product';
import { Product as ProductValue} from '../../../../Store/product';

import './Products.css';

type ProductsProps = {
    products: ProductValue[]
}
const Products = ({products}: ProductsProps) => {

    useEffect(() => {
        console.log('rendered products');
    })

    return (
        <div className="display-flex flex-wrap padx-4 products__wrapper">
            {
                products && products.length > 0 ?
                products.map((productValue, index) => 
                <div className="products__item" key={index}>
                    <Product product={productValue}/>
                </div>)
                    :
                null
            }
        </div>
    );
};

export default Products;