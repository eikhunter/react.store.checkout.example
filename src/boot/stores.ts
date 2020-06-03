import CheckoutStore from '../stores/CheckoutStore';

export class RootStore {
    checkoutStore: CheckoutStore;

    constructor() {
        this.setStores();
        this.checkoutStore = new CheckoutStore();
    }

    getStores = (): Stores => {
        return {
            productsStore: this.checkoutStore
        };
    };

    setStores() {
        this.checkoutStore = new CheckoutStore();
    }
}

export default (): Stores => {
    const rootStore = new RootStore();
    return rootStore.getStores();
};

export interface Stores {
    productsStore: CheckoutStore;
}
