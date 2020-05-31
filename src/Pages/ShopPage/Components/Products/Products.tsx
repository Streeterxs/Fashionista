import React, { useEffect } from 'react';

import {Product} from './Product';
import { Product as ProductValue} from '../../../../Store/product';

type ProductsProps = {
    products: ProductValue[]
}
const Products = ({products}: ProductsProps) => {

    useEffect(() => {
        console.log('rendered products');
    })

    return (
        <div className="display-flex flex-wrap padx-4">
            {
                products && products.length > 0 ?
                products.map((productValue, index) => 
                <div className="flex-basis-25">
                    <Product key={index} product={productValue}/>
                </div>)
                    :
                null
            }
        </div>
    );
};

export default Products;