function depositProfit(deposit, rate, threshold) {
    for (let i = 1; deposit < threshold; i++) {
        deposit = deposit + deposit * (0.01 * rate);
        if (deposit >= threshold) {
            return i
        }
    }
}
// depositProfit(100, 20, 170)
function absoluteValuesSumMinimization(a) {
    const s= a.map(b => a.reduce((p,c) => p=p+Math.abs(c-b),0))
    const x = a.find((el,index) => index === s.findIndex(el2 => el2 === Math.min(...s)))
    return console.log(x)
}
// absoluteValuesSumMinimization([2,4,7])
