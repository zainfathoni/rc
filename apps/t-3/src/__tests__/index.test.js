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
      expect(
        convertGrossSalesToCurrency(month, conversionRates, productId),
      ).toBe(expected);
    },
  );
});

describe("convertGrossSalesToCurrency with a different expected currency", () => {
  test.each([
    ["2024-01", 29184, "EUR", "€4,476.00"],
    ["2023-12", 38009, "EUR", "€280.76"],
    ["2024-01", 40821, "AUD", "A$31,063.39"],
  ])(
    `convertGrossSalesToCurrency(%s, conversionRates, %i, %s) returns %i`,
    (month, productId, expectedCurrency, expected) => {
      expect(
        convertGrossSalesToCurrency(
          month,
          conversionRates,
          productId,
          expectedCurrency,
        ),
      ).toBe(expected);
    },
  );
});

describe("convertGrossSalesToCurrency with a missing gross sales", () => {
  test.each([
    ["2024-02", 29184],
    ["2024-01", 38009],
    ["2024-02", 40821],
  ])(
    `convertGrossSalesToCurrency(%s, conversionRates, %i) returns null`,
    (month, productId) => {
      expect(
        convertGrossSalesToCurrency(month, conversionRates, productId),
      ).toBe(null);
    },
  );
});

describe("convertGrossSalesToCurrency with a missing conversion rate", () => {
  test.each([
    ["2024-01", 29184, "JPY", "$4,812.90"],
    ["2023-12", 38009, "IDR", "$301.89"],
    ["2024-01", 40821, "SGD", "€50,012.05"],
  ])(
    `convertGrossSalesToCurrency(%s, conversionRates, %i, %s) returns an error: "Unable to convert %s`,
    (month, productId, expectedCurrency, formattedOriginalAmount) => {
      expect(() =>
        convertGrossSalesToCurrency(
          month,
          conversionRates,
          productId,
          expectedCurrency,
        ),
      ).toThrowError(
        `Unable to convert ${formattedOriginalAmount} to ${expectedCurrency}.`,
      );
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
