import i18n from './i18n';

export const currencySymbol = '$';

export const parseCurrency = (n) =>
    `${currencySymbol}${i18n.toNumber(n, {precision: 2, separator: ',', delimiter: '.'})}`;
