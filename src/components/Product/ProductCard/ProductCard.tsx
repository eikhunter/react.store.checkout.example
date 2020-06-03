import React from 'react';

import { currencyFormat } from '../../../utils/currencyFormat';

import { ProductType } from '../../../constants/ProductType';
import Button from '../../Layout/Button/Button';

import './ProductCard.scss';

interface Props {
    addToBasket: (product: ProductType) => void;
    product: ProductType;
}

const ProductCard: React.FC<Props> = ({ addToBasket, product }) => {
    return (
        <div className="prd-Card">
            <div className="prd-Card_ImageContainer">
                <img alt={product.name} src={product.image} className="prd-Card_Image"/>
            </div>

            <div className="prd-Card_Body">
                <h4 className="prd-Card_Title">{product.name}</h4>

                <p className="prd-Card_Price">{currencyFormat(product.price, 'GBP')}</p>
            </div>

            <footer className="prd-Card_Footer">
                <Button onClick={() => addToBasket(product)} text="Add to basket"/>
            </footer>
        </div>
    );
};

export default ProductCard;
