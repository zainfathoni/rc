import { describe, expect, test } from "vitest";
import {
  conversionRates,
  convertGrossSalesToCurrency,
  formatLastPurchasedAt,
} from "../index.js";

describe("convertGrossSalesToCurrency", () => {
  test.each([
    ["2024-01", 29184, "$4,812.90"],
    ["2023-12", 38009, "$301.89"],
    ["2024-01", 40821, "$53,776.40"],
  ])(
    `convertGrossSalesToCurrency(%s, conversionRates, %i) returns %i`,
    (month, productId, expected) => {
      console.log(month, productId, expected);
      expect(
        convertGrossSalesToCurrency(month, conversionRates, productId),
      ).toBe(expected);
    },
  );
});

describe("formatLastPurchasedAt", () => {
  test.each([
    [29184, null],
    [38009, "11/14/2023, 6:51:49 AM"],
    [40821, "1/29/2024, 11:21:56 PM"],
  ])(`formatLastPurchasedAt(%i) returns %s`, (productId, expected) => {
    expect(formatLastPurchasedAt(productId)).toBe(expected);
  });
});
