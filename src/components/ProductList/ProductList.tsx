import React from 'react';

import { ProductType } from '../../constants/ProductType';
import ProductCard from '../Product/ProductCard/ProductCard';

import './ProductList.scss';

interface Props {
    addToBasket: (product: ProductType) => void;
    listItems: ProductType[]
}

const ProductList: React.FC<Props> = ({ addToBasket, listItems }) => {
    return (
        <div className="prd-List">
            <ul className="prd-List_Items">
                {listItems.map(item => (
                    <li key={item.id} className="prd-List_Item">
                        <ProductCard
                            addToBasket={addToBasket}
                            product={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
