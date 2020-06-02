import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../Store/store';
import { setProductsApi, getProduct } from '../../Store/Actions';
import { Product } from '../../Store/product';
import { Sizes } from './Components';
import { Size } from '../../Store/size';
import { ProductSelected } from '../../Store/productSelected';
import { addToCart } from '../../Store/Actions/CartActions/CartActions';
import { handleDiscount } from '../../Store/Reducers/CartReducer';

import './DetailsPage.css'

const DetailsPage = () => {
    const [productFinded, setProductFinded] = useState<Product | null>();
    const [productSelected, setProductSelected] = useState<ProductSelected>();
    const [showError, setShowError] = useState<boolean>(false);

    const {identifier} = useParams();

    const dispatch = useDispatch();
    const productsReducer = useSelector(({productsReducer}: RootState) => {
        return productsReducer
    });

    useEffect(() => {
        const fetchProducts = async () => {
            await dispatch(await setProductsApi())
        };

        if ((productsReducer.productList)?.length <= 0) {
            fetchProducts();
            return;
        }

        if(!productsReducer.productFinded || productsReducer.productFinded.code_color !== identifier) {
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
        console.log('productSelected: ', productSelected);
        dispatch(addToCart(productSelected));
    }

    const productSelection = (size: Size) => {
        const productCopy: Product = {...(productFinded as Product)};
        delete productCopy.sizes;

        setProductSelected({
            ...productCopy,
            sizeSelected: size,
            quantity: 1,
            discount_value: productCopy.discount_percentage ?
                `R$ ${Math.ceil(handleDiscount(productCopy.regular_price, productCopy.discount_percentage)).toFixed(2)}`:
                ''
        });
    }

    return (
        <div className="display-flex flex-wrap-reverse justify-center pady-4">
            <div className="marx-1 pos-relative">
                <img className="image-detail" src={productFinded ? productFinded.image : ''}></img>
                {
                    productFinded && productFinded.discount_percentage ?
                    <div className="product__discount">
                        -{productFinded.discount_percentage}
                    </div> :
                    null
                }
            </div>
            <div className="marx-1 details__manager-wrapper">
                <div>
                    <h3 className="mar-1">
                        {productFinded ? productFinded.name : ''}
                    </h3>
                    {
                        productFinded ?
                        productFinded.discount_percentage ?

                        <p className="mar-0">
                            <b className="marr-1">
                                <span className='marr-1 discounted__price'>
                                    {productFinded.regular_price}
                                </span>
                                {`R$ ${(Math.ceil(handleDiscount(productFinded.regular_price, productFinded.discount_percentage))).toFixed(2).replace('.', ',')}`}
                            </b>
                            <b className="custom-muted">
                                em até {productFinded ? productFinded.installments : ''}
                            </b>
                        </p> :

                        <p className="mar-0">
                            <b className="marr-1">
                                {productFinded.regular_price}
                            </b>
                            <b className="custom-muted">
                                em até {productFinded ? productFinded.installments : ''}
                            </b>
                        </p>:
                        ''
                    }
                </div>
                <p className="marb-0 custom-muted">Escolha o tamanho</p>
                {
                    !productSelected && showError ? 
                    <p className="mary-1 warning">
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