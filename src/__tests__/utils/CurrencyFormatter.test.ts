import * as currencyFormatter from '../../utils/currencyFormat';

describe('currencyFormatter()', () => {
    describe('methods', () => {
        test('currencyFormat() - returns formatted value', () => {
            const price = 130;
            const currency = 'GBP';
            const value = currencyFormatter.currencyFormat(price, currency);
            expect(value).toEqual('£130');
        });

        test('currencyFormat() - returns £ if currency is GBP', () => {
            const price = 130;
            const currency = 'GBP';
            const value = currencyFormatter.currencyFormat(price, currency);
            expect(value).toContain('£');
        });

        test('currencyFormat() - if value is over 1000 to add a ,', () => {
            const price = 1000;
            const currency = 'GBP';
            const value = currencyFormatter.currencyFormat(price, currency);
            expect(value).toContain(',');
        });

        test('currencyFormat() - if value is under 1000 to not contain a ,', () => {
            const price = 100;
            const currency = 'GBP';
            const value = currencyFormatter.currencyFormat(price, currency);
            expect(value).not.toContain(',');
        });
    })
});
