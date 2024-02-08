import { describe, it, expect } from "vitest";

import { Liquid } from "liquidjs";

import {
  money,
  money_with_currency,
  money_without_currency,
  money_without_trailing_zeros,
  moneyFiltersCompatPlugin,
} from "./money";

const num = 123456.789;
const context = { num: num }; // Num num num num num!

describe("moneyFiltersCompatPlugin", () => {
  const engine = new Liquid();
  engine.plugin(moneyFiltersCompatPlugin);

  // money
  it("should register the money filter", () => {
    const expr = "{{ num | money }}";
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("$123,456.79");
  });

  it("should call the money filter with the currency argument", () => {
    const expr = '{{ num | money: "EUR" }}';
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("€123,456.79");
  });

  it("should call the money filter with the currency and locales arguments", () => {
    const expr = '{{ num | money: "EUR", "de-DE" }}';
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("123.456,79 €");
  });

  // money_with_currency
  it("should register the money_with_currency filter", () => {
    const expr = "{{ num | money_with_currency }}";
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("$123,456.79 USD");
  });

  it("should call the money_with_currency filter with the currency argument", () => {
    const expr = '{{ num | money_with_currency: "EUR" }}';
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("€123,456.79 EUR");
  });

  it("should call the money_with_currency filter with the currency and locales arguments", () => {
    const expr = '{{ num | money_with_currency: "EUR", "de-DE" }}';
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("123.456,79 € EUR");
  });

  // money_without_currency
  it("should register the money_without_currency filter", () => {
    const expr = "{{ num | money_without_currency }}";
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("123,456.79");
  });

  it("should call the money_without_currency filter with the currency argument", () => {
    const expr = '{{ num | money_without_currency: "EUR" }}';
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("123,456.79");
  });

  it("should call the money_without_currency filter with the currency and locales arguments", () => {
    const expr = '{{ num | money_without_currency: "EUR", "de-DE" }}';
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("123.456,79");
  });

  // money_without_trailing_zeros
  // Note: The number will rounded up, which is why the last digit is 7 instead of 6, as the fractional part is: 0.789
  it("should register the money_without_trailing_zeros filter", () => {
    const expr = "{{ num | money_without_trailing_zeros }}";
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("$123,457");
  });

  it("should call the money_without_trailing_zeros filter with the currency argument", () => {
    const expr = '{{ num | money_without_trailing_zeros: "EUR" }}';
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("€123,457");
  });

  it("should call the money_without_trailing_zeros filter with the currency and locales arguments", () => {
    const expr = '{{ num | money_without_trailing_zeros: "EUR", "de-DE" }}';
    const result = engine.parseAndRenderSync(expr, context);
    expect(result).toBe("123.457 €");
  });
});

describe("money", () => {
  it("should format the number as currency", () => {
    expect(money(num)).toBe("$123,456.79");
    expect(money(num, "USD")).toBe("$123,456.79");
    expect(money(num, "USD", "en-US")).toBe("$123,456.79");
  });

  it("should format the number as currency when passed a currency setting", () => {
    expect(money(num, "EUR")).toBe("€123,456.79");
    expect(money(num, "JPY")).toBe("¥123,457");
  });

  it("should format the number as currency when passed a currency setting and a locale setting", () => {
    expect(money(num, "EUR", "en-US")).toBe("€123,456.79");
    expect(money(num, "EUR", "de-DE")).toBe("123.456,79 €");

    expect(money(num, "JPY", "en-US")).toBe("¥123,457");
    expect(money(num, "JPY", "ja-JP")).toBe("￥123,457");
  });

  it("should handle invalid inputs gracefully", () => {
    expect(money(NaN)).toBe("NaN");
    expect(money(num, "XYZ")).toBe("XYZ 123,456.79");
  });
});

describe("money_with_currency", () => {
  it("should format the number as currency", () => {
    expect(money_with_currency(num)).toBe("$123,456.79 USD");
    expect(money_with_currency(num, "USD")).toBe("$123,456.79 USD");
    expect(money_with_currency(num, "USD", "en-US")).toBe("$123,456.79 USD");
  });

  it("should format the number as currency when passed a currency setting", () => {
    expect(money_with_currency(num, "EUR")).toBe("€123,456.79 EUR");
    expect(money_with_currency(num, "JPY")).toBe("¥123,457 JPY");
  });

  it("should format the number as currency when passed a currency setting and a locale setting", () => {
    expect(money_with_currency(num, "EUR", "en-US")).toBe("€123,456.79 EUR");
    expect(money_with_currency(num, "EUR", "de-DE")).toBe("123.456,79 € EUR");

    expect(money_with_currency(num, "JPY", "en-US")).toBe("¥123,457 JPY");
    expect(money_with_currency(num, "JPY", "ja-JP")).toBe("￥123,457 JPY");
  });

  it("should handle invalid inputs gracefully", () => {
    expect(money_with_currency(NaN)).toBe("NaN");
    expect(money_with_currency(num, "XYZ")).toBe("XYZ 123,456.79 XYZ");
  });
});

describe("money_without_currency", () => {
  it("should format the number as currency", () => {
    expect(money_without_currency(num)).toBe("123,456.79");
    expect(money_without_currency(num, "USD")).toBe("123,456.79");
    expect(money_without_currency(num, "USD", "en-US")).toBe("123,456.79");
  });

  it("should format the number as currency when passed a currency setting", () => {
    expect(money_without_currency(num, "EUR")).toBe("123,456.79");
    expect(money_without_currency(num, "JPY")).toBe("123,457");
  });

  it("should format the number as currency when passed a currency setting and a locale setting", () => {
    expect(money_without_currency(num, "EUR", "en-US")).toBe("123,456.79");
    expect(money_without_currency(num, "EUR", "de-DE")).toBe("123.456,79");

    expect(money_without_currency(num, "JPY", "en-US")).toBe("123,457");
    expect(money_without_currency(num, "JPY", "ja-JP")).toBe("123,457");
  });

  it("should handle invalid inputs gracefully", () => {
    expect(money_without_currency(NaN)).toBe("NaN");
    expect(money_without_currency(num, "XYZ")).toBe("123,456.79");
  });
});

// Note: The number will rounded up, which is why the last digit is 7 instead of 6, as the fractional part is: 0.789
describe("money_without_trailing_zeros", () => {
  it("should format the number as currency", () => {
    expect(money_without_trailing_zeros(num)).toBe("$123,457");
    expect(money_without_trailing_zeros(num, "USD")).toBe("$123,457");
    expect(money_without_trailing_zeros(num, "USD", "en-US")).toBe("$123,457");
  });

  it("should format the number as currency when passed a currency setting", () => {
    expect(money_without_trailing_zeros(num, "EUR")).toBe("€123,457");
    expect(money_without_trailing_zeros(num, "JPY")).toBe("¥123,457");
  });

  it("should format the number as currency when passed a currency setting and a locale setting", () => {
    expect(money_without_trailing_zeros(num, "EUR", "en-US")).toBe("€123,457");
    expect(money_without_trailing_zeros(num, "EUR", "de-DE")).toBe("123.457 €");

    expect(money_without_trailing_zeros(num, "JPY", "en-US")).toBe("¥123,457");
    expect(money_without_trailing_zeros(num, "JPY", "ja-JP")).toBe("￥123,457");
  });

  it("should handle invalid inputs gracefully", () => {
    expect(money_without_trailing_zeros(NaN)).toBe("NaN");
    expect(money_without_trailing_zeros(num, "XYZ")).toBe("XYZ 123,457");
  });
});
