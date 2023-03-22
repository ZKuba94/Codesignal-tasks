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

const image = [[7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]]

function blurBoxes(image) {
    let newArr = []
    for (let i = 1; i < image.length - 1; i++) {
        for (let j = 1; j < image[i].length - 1; j++) {
            const part = ([image[i - 1].slice(j - 1, j + 2), image[i].slice(j - 1, j + 2), image[i + 1].slice(j - 1, j + 2)].flat())
            const newPix = Math.floor(part.reduce((acc, curr) => acc + curr) / part.length)
            newArr[i - 1] ? newArr[i - 1].push(newPix) : newArr[i - 1] = [newPix]
        }
    }
    return newArr
}

// blurBoxes(image)
const matrix = [[true, false, false],
    [false, true, false],
    [false, false, false]]

function minesweeper(matrix) {
    const newMatrix = []
    const scope = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let counter = 0
            scope.forEach(el => {
                if (el[0] + i >= 0 && el[1] + j >= 0 && el[0] + i <= matrix.length - 1 &&
                    el[1] + j <= matrix[0].length - 1 && matrix[el[0] + i][el[1] + j]) {
                    counter++
                }
            })
            newMatrix[i] ? newMatrix[i].push(counter) : newMatrix[i] = [counter]
        }
    }
    return newMatrix
}

// minesweeper(matrix)