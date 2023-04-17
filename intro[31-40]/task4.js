function depositProfit(deposit, rate, threshold) {
    for (let i = 1; deposit < threshold; i++) {
        deposit = deposit + deposit * (0.01 * rate);
        if (deposit >= threshold) {
            return i
        }
    }
}
// depositProfit(100, 20, 170)