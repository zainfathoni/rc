# Task 3

## Assumptions

Assumed function signatures:

```js
convertGrossSalesToCurrency("2024-01", conversionRates, 29184); //=> $4,812.9
convertGrossSalesToCurrency("2024-01", conversionRates, 38009); //=> $301.89
convertGrossSalesToCurrency("2024-01", conversionRates, 40821); //=> $53,776.40

formatLastPurchasedAt(29184); //=> null
formatLastPurchasedAt(38009); //=> 11/14/2023, 6:51:49 AM
formatLastPurchasedAt(40821); //=> 1/29/2024, 11:21:56 PM
```

### Additional capabilities of `convertGrossSalesToCurrency`

1. **Convert to non-USD currency**: The function `convertGrossSalesToCurrency`
   should be able to convert the gross sales to any currency by passing the
   expected currency as the 4th argument.
2. Returns null if the corresponding gross sales is not found in the product
   data.
3. Returns an error message if the conversion rate is not found in the
   conversion rates data.
