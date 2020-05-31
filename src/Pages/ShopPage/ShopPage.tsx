import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Product } from '../../Store/product';
import { RootState } from '../../Store/store';
import { getProducts } from '../../Store/Actions';
import { Products } from '.';

const ShopPage = () => {
    const dispatch = useDispatch();

    const {productsReducer} = useSelector((state: RootState) => {
        console.log('state');
        return state
    });
    
    useEffect(() => {
        console.log('rendered');
        const fetch = async () => {
            await dispatch(await getProducts());
        };
        fetch();
    }, [dispatch]);

    return (
        <div>
            {
                productsReducer && productsReducer.length > 0 ?
                <Products products={productsReducer as Product[]}/> :
                null
            }
        </div>
    );
};

export default ShopPage;