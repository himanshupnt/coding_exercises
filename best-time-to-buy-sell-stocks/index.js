// import { error } from "util";

class StockPricesError {
  constructor(errorMsg) {
    this.e = errorMsg;
  }
}
const profitCalculator = (maxProfit, currentPrice, currentDay, stockPrices) => {
  const nextPrice = stockPrices[currentDay + 1];

  if (nextPrice && currentPrice < nextPrice) {
    return maxProfit + nextPrice - currentPrice;
  }
  return maxProfit;
};
const calculateMaxProfit = stockPrices => {
  if (stockPrices.length === 0) {
    throw new Error("error, empty input");
  }
  return stockPrices.reduce(profitCalculator, 0);
};

module.exports = {
  calculateMaxProfit,
  StockPricesError
};
