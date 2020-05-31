import React from 'react';

import SideModal from "../SideModal/SideModal";

const HeaderSearchModal = () => {
    return (
        <b>
            Sacola (0)
        </b>
    )
};
type Cart = {
    showCart: boolean,
    closeCart: () =>  void
};

const Cart = ({showCart, closeCart}: Cart) => {
    return (
        <SideModal showModal={showCart} closeModal={closeCart} headerContent={<HeaderSearchModal/>}>
            Cart
        </SideModal>
    )
};

export default Cart;
