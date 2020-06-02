import React from 'react';
import { Product as ProductValue } from '../../../../../Store/product';

import './Product.css'
import { Link } from 'react-router-dom';

type ProductProps = {
    product: ProductValue
}
const Product = ({product}: ProductProps) => {
    return (
        <Link to={`/details/${product.code_color}`}>
            <div className="product">
                <div className="product__image-wrapper">
                    <img className="product_image" src={product.image} alt={product.name}/>
                </div>
                <div>
                    <p className="mar-0">
                        <b>
                            {product.name}
                        </b>
                    </p>
                    <p className="mar-0">
                        {product.regular_price}
                    </p>
                </div>
                {
                    product && product.discount_percentage ?
                    <div className="product__discount">
                        -{product.discount_percentage}
                    </div> :
                    null
                }
            </div>
        </Link>
    )
};

export default Product