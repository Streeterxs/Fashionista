import React from 'react';
import { Product as ProductValue } from '../../../../../Store/product';

import './Product.css'
import { Link } from 'react-router-dom';

type ProductProps = {
    product: ProductValue
}
const Product = ({product}: ProductProps) => {
    const handleDiscount = (regularPrice: string, discountPercent: string) => {
        const discountToNumber = (+discountPercent.replace('%', '.')) / 100;
        const priceToNumber = + regularPrice.split(' ')[1].replace(',', '.');
        return priceToNumber * (1 - discountToNumber);
    };

    return (
        <Link to={`/details/${product.code_color}`}>
            <div className="product">
                <div className="product__image-wrapper">
                    <img className="product_image" src={product.image ? product.image : 'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel'} alt={product.name}/>
                </div>
                <div>
                    <p className="mar-0 center">
                        <b>
                            {product.name}
                        </b>
                    </p>
                    {
                        product.discount_percentage ?

                        <p className="mar-0 center">
                            <span className='marr-1 price-cutted'>
                                {product.regular_price}
                            </span>
                            {`R$ ${(Math.ceil(handleDiscount(product.regular_price, product.discount_percentage))).toFixed(2).replace('.', ',')}`}
                        </p> :

                        <p className="mar-0 center">
                            {product.regular_price}
                        </p>
                    }
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