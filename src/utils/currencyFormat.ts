import currencyFormatter from 'currency-formatter';

export const currencyFormat = (price: number, currency: string): string => {
    const formattedPrice = price / 100;

    return  currencyFormatter.format(formattedPrice, { code: currency, precision: precision(price) });
};

const precision = (value: number): number | undefined => (value % 1 === 0 ? 0 : undefined);
