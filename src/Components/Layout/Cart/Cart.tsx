import React from 'react';

import SideModal from "../SideModal/SideModal";
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/store';
import { SelectedProducts } from './SelectedProducts';

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
        <SideModal showModal={showCart} closeModal={closeCart} headerContent={<HeaderCartModal totalItems={cartReducer?.totalProductSelected}/>}>
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
