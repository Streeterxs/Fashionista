import React, { useState, useEffect } from 'react'

import SideModal from '../SideModal/SideModal';
import { ProductList } from './ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../Store/store';
import { filterProducts } from '../../../Store';

import './Search.css'

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
            <div className="search__content-wrapper">
                <div className="search__wrapper">
                    <input placeholder="Buscar por produto..." className="search__input" type="text" onChange={(event) => handleSearchKeyUp(event.target.value)}/>
                </div>
                {
                    productsReducer.filteredProduct.length > 0 ?
                    <div className="padx-2">
                        <ProductList productArray={productsReducer.filteredProduct}/>
                    </div> :
                    <div className="search__text-wrapper">
                        Nenhum produto encontrado
                    </div>
                }
            </div>
        </SideModal>
    )
};

export default Search;