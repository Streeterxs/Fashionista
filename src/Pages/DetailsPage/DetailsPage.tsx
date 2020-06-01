import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../Store/store';
import { setProductsApi, getProduct } from '../../Store/Actions';
import { Product } from '../../Store/product';
import { Sizes } from './Components';
import './DetailsPage.css'
import { Size } from '../../Store/size';
import { ProductSelected } from '../../Store/productSelected';
import { addToCart } from '../../Store/Actions/CartActions/CartActions';

const DetailsPage = () => {
    const [productFinded, setProductFinded] = useState<Product | null>();
    const [productSelected, setProductSelected] = useState<ProductSelected>();
    const [showError, setShowError] = useState<boolean>(false);

    const {identifier} = useParams();

    const dispatch = useDispatch();
    const {productsReducer} = useSelector((state: RootState) => {
        return state
    });

    useEffect(() => {
        const fetchProducts = async () => {
            await dispatch(await setProductsApi())
        };

        if ((productsReducer.productList).length <= 0) {
            fetchProducts();
            return;
        }

        if(!productsReducer.productFinded || productsReducer.productFinded.style !== identifier) {
            dispatch(getProduct(identifier));
            return;
        };

        setProductFinded(productsReducer.productFinded);
    }, [productsReducer, identifier]);

    const handleAddToCart = () => {
        if (!productSelected) {
            setShowError(true);
            return;
        }

        dispatch(addToCart(productSelected));
    }

    const productSelection = (size: Size) => {
        const productCopy: Product = {...(productFinded as Product)};
        delete productCopy.sizes;

        setProductSelected({
            ...productCopy,
            sizeSelected: size,
            quantity: 1
        });
    }

    return (
        <div className="display-flex flex-wrap-reverse justify-center padx-5 pady-4">
            <div className="marx-1 flex-basis-25">
                <img src={productFinded ? productFinded.image : ''}></img>
            </div>
            <div className="marx-1 flex-basis-25">
                <div>
                    <h3 className="mar-1">
                        {productFinded ? productFinded.name : ''}
                    </h3>
                    <p><b>{productFinded ? productFinded.regular_price : ''}</b> em até {productFinded ? productFinded.installments : ''}</p>
                </div>
                <p className="marb-0">Escolha o tamanho</p>
                {
                    !productSelected && showError ? 
                    <p className="mary-1">
                        É necessário escolher um tamanho
                    </p> :
                    null
                }
                {
                    productFinded ?
                    <Sizes handleSizeSelected={productSelection} sizes={productFinded.sizes}/> :
                    null
                }
                <div>
                    <button className="add-cart__button" onClick={() => handleAddToCart()}>
                        Adicionar à Sacola
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;