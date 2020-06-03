import React from 'react';
import { observer } from 'mobx-react';

import CheckoutStore from '../../stores/CheckoutStore';
import Layout from '../../components/Layout/Layout/Layout';
import ModalBasket from '../../components/Modal/ModalBasket/ModalBasket';
import ProductList from '../../components/ProductList/ProductList';

import productData from '../../data/productData';

import './Products.scss';

interface Props {
    checkoutStore: CheckoutStore;
}

const initialState = () => ({
    basketModalOpen: false
});

type State = ReturnType<typeof initialState>;

@observer
class Products extends React.Component<Props, State> {
    state: State = initialState();

    componentDidUpdate(prevProps: Readonly<Props>): void {
        const { basketModalOpen } = this.state;

        if (prevProps.checkoutStore.basket.length === 0 && basketModalOpen) {
            this._closeBasketModal();
        }
    }

    _closeBasketModal = (): void => this.setState({ basketModalOpen: false });

    _openBasketModal = (): void => this.setState({ basketModalOpen: true });

    render() {
        const { basketModalOpen } = this.state;
        const { checkoutStore } = this.props;
        const modalBasket =
            <ModalBasket
                basketItems={checkoutStore.basket}
                basketTotalPrice={checkoutStore.basketTotalPrice}
                decreaseBasketQuantity={checkoutStore._decreaseBasketQuantity}
                increaseBasketQuantity={checkoutStore._increaseBasketQuantity}
                onQuantityInputChange={checkoutStore._onQuantityInputChange}
            />;

        return (
            <Layout
                basketTotal={checkoutStore.basketTotalItems}
                onClickBasket={this._openBasketModal}
                closeModal={this._closeBasketModal}
                modalContent={modalBasket}
                modalOpen={basketModalOpen}
            >
                <div className="prd-Product">
                    <div className="prd-Product_Inner">
                        <div className="prd-Product_Body">
                            <ProductList
                                addToBasket={checkoutStore._addToBasket}
                                listItems={productData}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Products;
