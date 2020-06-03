import React from 'react';

import { currencyFormat } from '../../../utils/currencyFormat';

import { BasketItemType } from '../../../constants/BasketItemType';
import BasketItem from '../../Basket/BasketItem/BasketItem';

import './ModalBasket.scss';

interface Props {
    basketItems: BasketItemType[]
    basketTotalPrice: number;
    decreaseBasketQuantity: (index: number) => void;
    increaseBasketQuantity: (index: number) => void;
    onQuantityInputChange: (value: string, index: number) => void;
}

const ModalBasket: React.FC<Props> = ({
                                          basketItems,
                                          basketTotalPrice,
                                          decreaseBasketQuantity,
                                          increaseBasketQuantity,
                                          onQuantityInputChange
                                      }) => {
    return (
        <div className="mod-Basket">
            <header className="mod-Basket_Header">
                <h3 className="mod-Basket_Title">Basket</h3>
            </header>

            <div className="mod-Basket_Body">
                <ul className="mod-Basket_Items">
                    {basketItems.map((item, index) => (
                        <li key={item.product.id} className="mod-Basket_Item">
                            <BasketItem
                                basketItem={item}
                                basketIndex={index}
                                decreaseQuantity={decreaseBasketQuantity}
                                increaseQuantity={increaseBasketQuantity}
                                onQuantityInputChange={onQuantityInputChange}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="mod-Basket_Footer">
                <p className="mod-Basket_Total">Subtotal: <span className="mod-Basket_Total mod-Basket_Total-number">{currencyFormat(basketTotalPrice, 'GBP')}</span></p>
            </footer>
        </div>
    );
};

export default ModalBasket;
