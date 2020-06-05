import React from 'react';

import { currencyFormat } from '../../../utils/currencyFormat';

import { BasketItemType } from '../../../constants/BasketItemType';
import BasketQuantity from '../BasketQuantity/BasketQuantity';

import './BasketItem.scss';

interface Props {
    basketItem: BasketItemType;
    basketIndex: number;
    decreaseQuantity: (index: number) => void;
    deleteBasketItem: (index: number) => void;
    increaseQuantity: (index: number) => void;
    onQuantityInputChange: (value: string, index: number) => void;
}

const BasketItem: React.FC<Props> = ({
                                         basketItem,
                                         basketIndex,
                                         decreaseQuantity,
                                         deleteBasketItem,
                                         increaseQuantity,
                                         onQuantityInputChange
                                     }) => {
    const product = basketItem.product;
    const basketItemTotal = product.price * basketItem.quantity;

    return (
        <div className="bsk-Item">
            <div className="bsk-Item_ImageContainer">
                <img alt={product.name} src={product.image} className="bsk-Item_Image"/>
            </div>

            <div className="bsk-Item_Columns">
                <div className="bsk-Item_Column bsk-Item_Column-body">
                    <div className="bsk-Item_Body">
                        <h5 className="bsk-Item_Title">{product.name}</h5>
                        <p className="bsk-Item_Price">{currencyFormat(product.price, 'GBP')}</p>
                    </div>
                </div>

                <div className="bsk-Item_Column bsk-Item_Column-quantity">
                    <BasketQuantity
                        basketIndex={basketIndex}
                        decreaseQuantity={decreaseQuantity}
                        increaseQuantity={increaseQuantity}
                        onQuantityInputChange={onQuantityInputChange}
                        quantity={basketItem.quantity}
                    />

                    <button
                        className="bsk-Item_Delete"
                        onClick={() => deleteBasketItem(basketIndex)}
                    >
                        Remove
                    </button>
                </div>

                <div className="bsk-Item_Column bsk-Item_Column-total">
                    <p className="bsk-Item_Total">{currencyFormat(basketItemTotal, 'GBP')}</p>
                </div>
            </div>
        </div>
    );
};

export default BasketItem;
