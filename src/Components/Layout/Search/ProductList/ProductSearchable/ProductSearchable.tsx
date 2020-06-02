import React from 'react';

import { Product } from '../../../../../Store/product';
import './ProductSearchable.css'
import { Link } from 'react-router-dom';

type ProductSearchableProps = {
    selectedProduct: Product;
}
const ProductSearchable = ({selectedProduct}: ProductSearchableProps) => {
    return (
        <Link to={`/details/${selectedProduct.code_color}`}>
            <div className="display-flex">
                <div className="flex-basis-25">
                    <picture className="selected-product__image-wrapper">
                        <img className="selected-product__image" src={selectedProduct.image} alt={selectedProduct.name}/>
                    </picture>
                </div>
                <div className="flex-basis-50 product-quantity__manager">
                    <p className="mar-0 product-name">
                        <b>{selectedProduct.name}</b>
                    </p>
                </div>
                <div className="flex-basis-25">
                    <p className="mar-0 price-regular center">
                        <b>
                            {selectedProduct.actual_price}
                        </b>
                    </p>
                    <p className="mar-0 installments muted center">{selectedProduct.installments}</p>
                </div>
            </div>
        </Link>
    )
};

export default ProductSearchable;
