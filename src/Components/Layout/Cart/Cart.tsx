import React from 'react';

import SideModal from "../SideModal/SideModal";
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/store';
import { SelectedProducts } from './SelectedProducts';


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
    const {cartReducer} = useSelector((state: RootState) => state);

    return (
        <SideModal
            showModal={showCart}
            closeModal={closeCart}
            headerContent={<HeaderCartModal totalItems={cartReducer?.totalProductSelected}/>}
            footer={<FooterCartModal totalValue={cartReducer?.totalCost}/>}>
            {
                cartReducer?.productsSelected.length > 0 ? 
                <SelectedProducts selectedProducts={cartReducer?.productsSelected}/> :
                <div>
                    Sacola está vazia.
                </div>
            }
        </SideModal>
    )
};

export default Cart;
