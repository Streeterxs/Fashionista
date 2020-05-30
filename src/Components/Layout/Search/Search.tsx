import React from 'react'

import SideModal from '../SideModal/SideModal';

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
    return (
        <SideModal showModal={showSearch} closeModal={closeSearch} headerContent={<HeaderSearchModal/>}>
            teste
        </SideModal>
    )
};

export default Search;