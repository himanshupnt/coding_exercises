class StockPricesError extends Error {
  constructor(errorMsg) {
    super(errorMsg);
    this.name = "StockPricesError";
  }
}
const errorHandler = stockPrices => {
  if (stockPrices.length === 0) {
    throw new StockPricesError("error, empty input");
  }
  if (stockPrices.length === 1) {
    throw new StockPricesError("error, not enough input data");
  }
  if (Array.isArray(stockPrices) === false) {
    throw new StockPricesError("error, input must be an array");
  }
  stockPrices.forEach(price => {
    if (typeof price !== "number") {
      throw new StockPricesError("error, price must be a number");
    }
  });
};

const profitCalculator = (maxProfit, currentPrice, currentDay, stockPrices) => {
  const nextPrice = stockPrices[currentDay + 1];

  if (nextPrice && currentPrice < nextPrice) {
    return maxProfit + nextPrice - currentPrice;
  }
  return maxProfit;
};

const calculateMaxProfit = stockPrices => {
  errorHandler(stockPrices);
  return stockPrices.reduce(profitCalculator, 0);
};

module.exports = {
  calculateMaxProfit,
  StockPricesError
};
