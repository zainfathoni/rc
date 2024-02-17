export const conversionRates = [
  ["USD", "EUR", 0.93],
  ["AUD", "EUR", 1.61],
];

const productData = [
  {
    id: 29184,
    monthly_metrics: {
      "2024-01": {
        gross_sales: {
          currency: "USD",
          amount: 4812.9,
        },
      },
    },
  },
  {
    id: 38009,
    monthly_metrics: {
      "2023-12": {
        gross_sales: {
          currency: "USD",
          amount: 301.89,
        },
      },
    },
    last_purchased_at: "2023-11-14T09:51:49.22Z",
  },
  {
    id: 40821,
    monthly_metrics: {
      "2024-01": {
        gross_sales: {
          currency: "EUR",
          amount: 50012.05,
        },
      },
    },
    last_purchased_at: "2024-01-30T02:21:56.11Z",
  },
];

function getProductById(productId) {
  return productData.find((product) => product.id === productId);
}

export function convertGrossSalesToCurrency(
  month,
  conversionRates,
  productId,
  expectedCurrency = "USD",
) {
  const product = getProductById(productId);
  const grossSales = product.monthly_metrics[month]?.gross_sales;

  if (!grossSales) {
    return null;
  }
  const { currency, amount } = grossSales;

  let rate = 1;
  if (currency !== expectedCurrency) {
    const conversionRate = conversionRates.find(
      ([srcCurrencyCode, dstCurrencyCode]) =>
        srcCurrencyCode === currency && dstCurrencyCode === expectedCurrency,
    );
    if (conversionRate) {
      rate = conversionRate[2];
    } else {
      const invertedConversionRate = conversionRates.find(
        ([srcCurrencyCode, dstCurrencyCode]) =>
          dstCurrencyCode === currency && srcCurrencyCode === expectedCurrency,
      );
      if (!invertedConversionRate) {
        throw new Error(
          `Conversion rate not found for ${currency} to ${expectedCurrency}`,
        );
      }
      rate = 1 / invertedConversionRate[2];
    }
  }

  const convertedAmount = amount * rate;
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: expectedCurrency,
  }).format(convertedAmount);

  return formattedAmount;
}

export function formatLastPurchasedAt(productId) {
  const product = getProductById(productId);
  return product.last_purchased_at
    ? new Date(product.last_purchased_at).toLocaleString("en-US", {
        timeZone: "America/Fortaleza",
      })
    : null;
}
