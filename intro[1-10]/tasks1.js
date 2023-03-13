function adding(param1, param2) {
    return param1 + param2
}

function centuryFromYear(year) {
    const cent = year / 100
    return Math.ceil(cent)
}

function checkPalindrome(inputString) {
    const arr1 = Array.of(...inputString)
    const arr2 = arr1.reverse()
    const outputString = arr2.join('')
    return inputString === outputString ? true : false
}

function adjacentElementsProduct(inputArray) {
    let x = inputArray[0] * inputArray[1]
    for (let i = 0; i < inputArray.length; i++) {
        let newX = inputArray[i] * inputArray[i + 1]
        if (newX > x) {
            x = newX
        }
    }
    return x
}

function shapeArea(n) {
    return n * n + (n - 1) * (n - 1)
}

function makeArrayConsecutive(statues) {
    const minN = Math.min(...statues)
    const maxN = Math.max(...statues)
    let counter = 0
    for (let i = 0; i <= maxN; i++) {
        statues.includes(minN + i) && minN + i !== maxN ? counter++ : false
    }
    return maxN - minN - counter
}

function almostIncreasingSequence(sequence) {
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            const caseOne = sequence.slice()
            const caseTwo = sequence.slice()
            caseOne.splice(i, 1)
            caseTwo.splice(i + 1, 1)
            console.log(sequence)
            for (let i = 0; i < caseOne.length; i++) {
                if (caseOne[i] >= caseOne[i + 1]) {
                    for (let i = 0; i < caseTwo.length; i++) {
                        if (caseTwo[i] >= caseTwo[i + 1]) {
                            return false
                        }
                    }
                    return true
                }
            }
            return true
        }
    }
    return true
}

function matrixElementsSum(matrix) {
    let cost = 0;
    let ghosts = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                ghosts.push(j)
            }
            if (matrix[i][j] !== 0 && !ghosts.includes(j)) {
                cost += matrix[i][j]
            }
        }
    }
    return cost
}

function allLongestStrings(inputArray) {
    let maxLength = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > maxLength) {
            maxLength = inputArray[i].length
        }
    }
    return inputArray.filter(el => el.length === maxLength)
}

function commonCharacterCount(s1, s2) {
    let counter = 0;
    let s1Converted = s1.split('')
    for (let i = 0; i < s1Converted.length; i++) {
        if (s2.includes(s1Converted[i])) {
            s2 = s2.replace(s1Converted[i], '')
            counter++
        }
    }
    return counter
}
