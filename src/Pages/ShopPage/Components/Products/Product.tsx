import React from 'react';
import { Product as ProductValue } from '../../../../Store/product';

type ProductProps = {
    product: ProductValue
}
const Product = ({product}: ProductProps) => {
    return (
        <div>
            sing product
        </div>
    )
};

export default Product