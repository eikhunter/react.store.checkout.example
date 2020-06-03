import React from 'react';

import './BasketQuantity.scss';

interface Props {
    basketIndex: number;
    decreaseQuantity: (index: number) => void;
    increaseQuantity: (index: number) => void;
    onQuantityInputChange: (value: string, index: number) => void;
    quantity: number;
}

const BasketQuantity: React.FC<Props> = ({
                                             basketIndex,
                                             decreaseQuantity,
                                             increaseQuantity,
                                             onQuantityInputChange,
                                             quantity
                                         }) => {
    return (
        <div className="bsk-Quantity">
            <button
                className="bsk-Quantity_Button bsk-Quantity_Button-decrease"
                onClick={() => decreaseQuantity(basketIndex)}
            >
                -
            </button>
            <input
                className="bsk-Quantity_Input"
                type="number"
                value={quantity}
                onChange={(e) => onQuantityInputChange(e.target.value, basketIndex)}
            />
            <button
                className="bsk-Quantity_Button bsk-Quantity_Button-decrease"
                onClick={() => increaseQuantity(basketIndex)}
            >
                +
            </button>
        </div>
    );
};

export default BasketQuantity;
