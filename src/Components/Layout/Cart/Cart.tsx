import React, { useCallback, useEffect } from 'react';

import SideModal from "../SideModal/SideModal";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../Store/store';
import { SelectedProducts } from './SelectedProducts';
import { plusOneProduct, minusOneProduct, removeProduct } from '../../../Store/Actions/CartActions/CartActions';

import './Cart.css'

type FooterCartModalProps = {
    totalValue: number;
}
const FooterCartModal = ({totalValue}: FooterCartModalProps) => {
    return (
        <b>
            Subtotal - R$ {totalValue.toFixed(2).replace('.', ',')}
        </b>
    )
}

type HeaderCartModalProps = {
    totalItems: number;
}
const HeaderCartModal = ({totalItems}: HeaderCartModalProps) => {
    return (
        <b>
            Sacola ({totalItems})
        </b>
    )
};

type Cart = {
    showCart: boolean,
    closeCart: () =>  void
};
const Cart = ({showCart, closeCart}: Cart) => {
    const cartReducer = useSelector(({cartReducer}: RootState) => cartReducer);
    const dispatch = useDispatch();

    const productPlusClickHandler = (productSku: string) => {
        dispatch(plusOneProduct(productSku));
    }

    const productMinusClickHandler = (productSku: string) => {
        dispatch(minusOneProduct(productSku));
    }

    const productRemoveClickHandler = (productSku: string) => {
        dispatch(removeProduct(productSku));
    }

    return (
        <SideModal
            showModal={showCart}
            closeModal={closeCart}
            headerContent={<HeaderCartModal totalItems={cartReducer?.totalProductSelected}/>}
            footer={<FooterCartModal totalValue={cartReducer?.totalCost}/>}>
            <div className="padx-2"> 
                <SelectedProducts
                    productRemoveClick={useCallback(productRemoveClickHandler, [productRemoveClickHandler])}
                    productMinusClick={useCallback(productMinusClickHandler, [productMinusClickHandler])}
                    productPlusClick={useCallback(productPlusClickHandler, [productPlusClickHandler])}
                    selectedProducts={cartReducer?.productsSelected}/>
                {
                    cartReducer?.productsSelected.length === 0 ? 
                        <div className="cart__text-wrapper">
                            Sacola está vazia.
                        </div> :
                        null
                }
            </div>
        </SideModal>
    )
};

export default Cart;
