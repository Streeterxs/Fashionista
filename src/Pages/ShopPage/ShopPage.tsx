import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../Store/store';
import { Products } from '.';
import { setProductsApi } from '../../Store/Actions/ProductsActions/ProductsActions';

const ShopPage = () => {
    const dispatch = useDispatch();

    const productsReducer = useSelector((state: RootState) => {
        return state.productsReducer
    });
    
    useEffect(() => {
        const fetch = async () => {
            await dispatch(await setProductsApi());
        };
        if ((productsReducer.productList).length <= 0) fetch();
    }, [dispatch]);

    return (
        <div>
            {
                productsReducer && (productsReducer.productList).length > 0 ?
                <Products products={productsReducer.productList}/> :
                null
            }
        </div>
    );
};

export default ShopPage;