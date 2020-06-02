import React, { useState, useEffect } from 'react'

import SideModal from '../SideModal/SideModal';
import { ProductList } from './ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../Store/store';
import { filterProducts } from '../../../Store';

const HeaderSearchModal = () => {
    return (
        <b>
            Buscar Produtos
        </b>
    )
};

type SearchType = {
    showSearch: boolean;
    closeSearch: () => void
}

const Search = ({showSearch, closeSearch}: SearchType) => {
    const {productsReducer} = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const handleSearchKeyUp = (stringTyped: string) => {
        console.log(stringTyped);
        dispatch(filterProducts(stringTyped));
    }

    return (
        <SideModal showModal={showSearch} closeModal={closeSearch} headerContent={<HeaderSearchModal/>}>
            <div>
                <div>
                    <input type="text" onChange={(event) => handleSearchKeyUp(event.target.value)}/>
                </div>
                <div>
                    <ProductList productArray={productsReducer.filteredProduct}/>
                </div>
            </div>
        </SideModal>
    )
};

export default Search;