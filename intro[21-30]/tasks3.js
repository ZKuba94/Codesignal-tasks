function isIPv4Address(inputString) {
    const arr = inputString.split('.')
    if (arr.length !== 4 || !arr.every(el => (el >= 0 && el <= 255 && el.length > 0))) {
        return false
    } else if (arr.some(el => el.length > 1 && el.startsWith('0'))) {
        return false
    } else return true
}

function avoidObstacles(inputArray) {
    let step = 1
    do {
        if (inputArray.some(el => el % step === 0)) {
            step++
        } else return step
    } while (true)
}