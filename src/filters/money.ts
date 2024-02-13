import { Liquid } from "liquidjs";

/**
 * Formats a given price based on the store's [**HTML without currency** setting](https://help.shopify.com/manual/payments/currency-formatting).
 *
 * @syntax: `number | money: currency?, locales?`
 *
 * @example
 * ```liquid
 * {{ product.price | money: "USD", "en-US" }} => "$10.00"
 * ```
 *
 * @see https://shopify.dev/docs/api/liquid/filters/money
 *
 * @param {number} num
 * @param {string} currency
 * @param {string | string[]} locales
 *
 * @returns {string} string
 */
export const money = (
  num: number | null | undefined = 0,
  currency: string = "USD",
  locales: string | string[] = "en-US"
): string => {
  try {
    num = sanitizeNumber(num);

    const formatted = new Intl.NumberFormat(locales, {
      style: "currency",
      currency,
      currencyDisplay: "narrowSymbol",
    }).format(num);

    return `${formatted}`;
  } catch (err) {
    return (num ?? 0).toString();
  }
};

/**
 * Formats a given price based on the store's [**HTML without currency** setting](https://help.shopify.com/manual/payments/currency-formatting).
 *
 * @syntax: `number | money: currency?, locales?`
 *
 * @example
 * ```liquid
 * {{ product.price | money: "USD", "en-US" }} => "$10.00"
 * ```
 *
 * @see https://shopify.dev/docs/api/liquid/filters/money
 *
 * @param {number} num
 * @param {string} currency
 * @param {string | string[]} locales
 *
 * @returns {string} string
 */
 * Formats a given price based on the store's [**HTML with currency** setting](https://help.shopify.com/manual/payments/currency-formatting)..
 *
 * @syntax: `number | money_with_currency: currency?, locales?`
 *
 * @example
 * ```liquid
 * {{ product.price | money_with_currency: "USD", "en-US" }} => "$10.00 USD"
 * ```
 *
 * @see https://shopify.dev/docs/api/liquid/filters/money_with_currency
 *
 * @param {number} num
 * @param {string} currency
 * @param {string | string[]} locales
 *
 * @returns {string} string
 */
export const money_with_currency = (
  num: number | null | undefined = 0,
  currency: string = "USD",
  locales: string | string[] = "en-US"
): string => {
  try {
    num = sanitizeNumber(num);

    const formatted = new Intl.NumberFormat(locales, {
      style: "currency",
      currency,
      currencyDisplay: "narrowSymbol",
    }).format(num);

    return `${formatted} ${currency}`;
  } catch (err) {
    return (num ?? 0).toString();
  }
};

/**
 * Formats a given price based on the store's [**HTML with currency** setting](https://help.shopify.com/manual/payments/currency-formatting)..
 *
 * @syntax: `number | money_with_currency: currency?, locales?`
 *
 * @example
 * ```liquid
 * {{ product.price | money_with_currency: "USD", "en-US" }} => "$10.00 USD"
 * ```
 *
 * @see https://shopify.dev/docs/api/liquid/filters/money_with_currency
 *
 * @param {number} num
 * @param {string} currency
 * @param {string | string[]} locales
 *
 * @returns {string} string
 */
 * Formats a given price based on the store's [**HTML without currency** setting](https://help.shopify.com/manual/payments/currency-formatting), without the currency symbol.
 *
 * @syntax: `number | money_without_currency: currency?, locales?`
 *
 * @example
 * ```liquid
 * {{ product.price | money_without_currency: "USD", "en-US" }} => "10.00"
 * ```
 *
 * @see https://shopify.dev/docs/api/liquid/filters/money_without_currency
 *
 * @param {number} num
 * @param {string} currency
 * @param {string | string[]} locales
 *
 * @returns {string} string
 */
export const money_without_currency = (
  num: number | null | undefined = 0,
  currency: string = "USD",
  locales: string | string[] = "en-US"
): string => {
  try {
    num = sanitizeNumber(num);

    const formatted = new Intl.NumberFormat(locales, {
      style: "currency",
      currency,
      currencyDisplay: "code",
    })
      .format(num)
      .replace(currency, "")
      .trim();

    return `${formatted}`;
  } catch (err) {
    return (num ?? 0).toString();
  }
};

/**
 * Formats a given price based on the store's [**HTML without currency** setting](https://help.shopify.com/manual/payments/currency-formatting), without the currency symbol.
 *
 * @syntax: `number | money_without_currency: currency?, locales?`
 *
 * @example
 * ```liquid
 * {{ product.price | money_without_currency: "USD", "en-US" }} => "10.00"
 * ```
 *
 * @see https://shopify.dev/docs/api/liquid/filters/money_without_currency
 *
 * @param {number} num
 * @param {string} currency
 * @param {string | string[]} locales
 *
 * @returns {string} string
 */
};

/**
 * Formats a given price based on the store's [**HTML without currency** setting](https://help.shopify.com/manual/payments/currency-formatting).
 *
 * @syntax: `number | money_without_trailing_zeros: currency?, locales?`
 *
 * @example
 * ```liquid
 * {{ product.price | money_without_trailing_zeros: "USD", "en-US" }} => "$10"
 * ```
 *
 * @see https://shopify.dev/docs/api/liquid/filters/money_without_trailing_zeros
 *
 * @param {number} num
 * @param {string} currency
 * @param {string | string[]} locales
 *
 * @returns {string} string
 */
export const money_without_trailing_zeros = (
  num: number | null | undefined = 0,
  currency: string = "USD",
  locales: string | string[] = "en-US"
): string => {
  try {
    num = sanitizeNumber(num);

    const formatted = new Intl.NumberFormat(locales, {
      style: "currency",
      currency,
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0,
    }).format(num);

    return `${formatted}`;
  } catch (err) {
    return (num ?? 0).toString();
  }
};

export function moneyFiltersCompatPlugin(this: Liquid) {
  this.registerFilter("money", money);
  this.registerFilter("money_with_currency", money_with_currency);
  this.registerFilter("money_without_currency", money_without_currency);
  this.registerFilter(
    "money_without_trailing_zeros",
    money_without_trailing_zeros
  );
}

// Utils:
export const sanitizeNumber = (
  num?: number | string | boolean | null | undefined
): number => {
  num = Number(num);
  if (isNaN(num)) {
    return 0;
  }
  if (!isFinite(num)) {
    return 0;
  }
  return num;
};
