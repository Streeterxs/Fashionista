import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../../Store/product';

const ShopPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useSelector((state) => {
        console.log('teste: ', state);
    });
    
    useEffect(() => {
        console.log('rendered');
    }, []);

    return (
        <div>
            shop page
        </div>
    );
};

export default ShopPage;