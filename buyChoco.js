var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);
    for (let i = 0; i < prices.length - 1; i++) {
        if ((prices[i] + prices[i + 1]) <= money) {
            return money - (prices[i] + prices[i + 1]);
        } else {
            return money;
        }
    }
};

console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62));