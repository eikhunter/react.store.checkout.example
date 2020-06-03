import { action, computed, observable } from 'mobx';

import { BasketItemType } from '../constants/BasketItemType';
import { ProductType } from '../constants/ProductType';

export default class CheckoutStore {
    @observable basket: BasketItemType[] = [
        {
            product: {
                id: 3,
                name: "UO Men’s Tie-Dye Earth Vacation Crew Neck Sweatshirt",
                price: 4900,
                image: "https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0216579930094_000_b?$xlarge$&fit=constrain&qlt=80&wid=683"
            },
            quantity: 1
        },
        {
            product: {
                "id": 4,
                "name": "Lazy Oaf Men’s Information Technology Yellow Track Pants",
                "price": 7500,
                "image": "https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0221345850055_072_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=1366"
            },
            quantity: 1
        },
        {
            product: {
                "id": 6,
                "name": "adidas Men’s Outline Blue Shorts",
                "price": 3300,
                "image": "https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0225291620032_040_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=1366"
            },
            quantity: 1
        }
    ];

    @action _addToBasket = (product: ProductType) => {
        // I would put this method in another store relative to products, added it so the application has a full UX flow.

        const basketItem = {
            product: product,
            quantity: 1
        };

        const exists = this.basket.some((value) => {
            if (value.product.id === product.id) {
                value.quantity ++;
            }

            return value.product.id === product.id;
        });

        if (!exists) {
            this.basket.push(basketItem);
        }
    };

    @action _decreaseBasketQuantity = (basketIndex: number) => {
        if (this.basket[basketIndex].quantity > 1) {
            this.basket[basketIndex].quantity --;
        } else {
            this._deleteBasketItem(basketIndex);
        }
    };

    @action _deleteBasketItem = (index: number) => {
        this.basket.splice(index, 1)
    };

    @action _increaseBasketQuantity = (index: number) => {
        this.basket[index].quantity ++;
    };

    @action _onQuantityInputChange = (value: string, index: number) => {
        this.basket[index].quantity = parseInt(value, 10)
    };

    @computed get basketTotalItems(): number {
        return this.basket.reduce((a, b) => a + b.quantity, 0)
    }

    @computed get basketTotalPrice(): number {
        return this.basket.reduce((a, b) => a + b.quantity * b.product.price, 0)
    }
}
