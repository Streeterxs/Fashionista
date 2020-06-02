import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'

import { ProductSelected } from '../../../../../Store/productSelected';


import './SelectedProduct.css'

type SelectedProductProps = {
    selectedProduct: ProductSelected;
}
const SelectedProduct = ({selectedProduct}: SelectedProductProps) => {
    return (
        <div className="display-flex">
            <div className="flex-basis-25">
                <picture className="selected-product__image-wrapper">
                    <img className="selected-product__image" src={selectedProduct.image} alt={selectedProduct.name}/>
                </picture>
                <p className="mar-0 remover-button">Remover item</p>
            </div>
            <div className="flex-basis-50 product-quantity__manager">
                <p className="mar-0 product-name">
                    <b>{selectedProduct.name}</b>
                </p>
                <p className="mary-1 muted">
                    Tam.:{selectedProduct.sizeSelected.size}
                </p>
                <div className="display-flex">
                    <FontAwesomeIcon icon={faMinusSquare} className="button__qnt-manager"/>

                    <div className="marx-2">
                        {selectedProduct.quantity}
                    </div>

                    <FontAwesomeIcon icon={faPlusSquare} className="button__qnt-manager"/>
                </div>
            </div>
            <div className="flex-basis-25">
                <p className="mar-0 price-regular center">
                    <b>
                        {selectedProduct.discount_percentage ? selectedProduct.discount_value : selectedProduct.regular_price}
                    </b>
                </p>
                <p className="mar-0 installments muted center">{selectedProduct.installments}</p>
            </div>
        </div>
    )
};

export default SelectedProduct;
