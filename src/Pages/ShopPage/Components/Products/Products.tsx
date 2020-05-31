import React, { useEffect } from 'react';

import {Product} from './';
import { Product as ProductValue} from '../../../../Store/product';

type ProductsProps = {
    products: ProductValue[]
}
const Products = ({products}: ProductsProps) => {

    useEffect(() => {
        console.log('rendered products');
    })

    return (
        <div>
            products list
            <div>
                {
                    products && products.length > 0 ?
                    products.map((productValue, index) => <Product key={index} product={productValue}/>) :
                    null
                }
            </div>
        </div>
    );
};

export default Products;