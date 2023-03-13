function isLucky(n) {
    const number = n.toString()
    const length = (number.length)/2
    const first = (number.substring(0,length)).split('')
    const second = (number.substring(length,number)).split('')
    let sumFirst=0
    let sumSecond=0
    for (let i=0;i<first.length;i++) {
        sumFirst+=Number.parseFloat(first[i])
    }
    for (let i=0;i<second.length;i++) {
        sumSecond+=Number.parseFloat(second[i])
    }
    if (sumFirst===sumSecond) {
        return true
    } else return false
}
function sortByHeight(a) {
    let i = 0;
    let counter = 0;
    let arrayLength = a.length +1
    while (i < arrayLength) {
        for (let i = 0; i < arrayLength; i++) {
            if (a[i] > a[i + 1+counter] && a[i]!==-1 && a[i+1+counter]!== -1) {
                let higherNumber = a[i];
                a[i] = a[i + 1+counter];
                a[i + 1+counter] = higherNumber;
                counter=0;
            } else if (a[i]===-1) {
            }
            else if(i+1+counter=== undefined) {
                counter = 0
            }
            else if (a[i] > a[i + 1+counter] && a[i]!==-1 && a[i+1+counter]===-1) {
                counter++
                i= i - 1
            }
            else {counter = 0}
        }
        i++
    }
    return a
}
function reverseInParentheses(inputString) {
    let counter = 0;
    (inputString.split('')).forEach(el => el === '(' ? counter++ : false);
    for (let i = 0; i < counter; i++) {
        let start = inputString.lastIndexOf('(')
        let check = inputString.substring(start)
        let stop = check.indexOf(')')+start
        let toCut = ((inputString.split('')).splice(start, stop - start + 1)).join('')
        let reversed = (((Array.from(toCut)).filter(el => el !== '(' && el !== ')')).reverse()).join('')
        inputString = inputString.replace(toCut, reversed)
    }
    return inputString
}
function alternatingSums(a) {
    let odd=0;
    let even=0;
    for (let i=0; i<a.length; i++) {
        if (i%2===0){odd+=a[i]}
        else if(i%2!==0){even+=a[i]}
    }
    return Array(odd,even)
}
function addBorder(picture) {
    return [
        '*'.repeat(picture[0].length + 2),
        ...picture.map(el => `*${el}*`),
        '*'.repeat(picture[0].length + 2),
    ]
}
function areSimilar(a, b) {
    if (a.toString()===b.toString()){
        return true
    } else if ((a.slice().sort()).toString()===(b.slice().sort()).toString()) {
        for (let i=0; i<a.length;i++) {
            for (let j = i+1;j<a.length;j++) {
                if (a[i]!==b[i]) {
                    let temp = a[i]
                    a[i] = a[j]
                    a[j] = temp
                    if (a.toString()===b.toString()){return true}
                    a[j] = a[i]
                    a[i] = temp
                }
            }
        } return false
    } else return false
}
function arrayChange(inputArray) {
    let counter = 0
    for(let i=0;i<inputArray.length;i++){
        while (inputArray[i]>=inputArray[i+1]) {
            inputArray[i+1] += 1
            counter++
        }
    }
    return counter
}
function palindromeRearranging(inputString) {
    let tempArr = Array.from(inputString)
    const tempObj = tempArr.reduce((acc,currentEl) => {
        if (acc[currentEl]) {
            acc[currentEl]++
        } else {
            acc[currentEl] = 1
        }
        return acc
    },{})
    const counterArr = Object.values(tempObj)
    if (inputString.length%2===0) {
        return counterArr.every(el=> el%2===0)
    } else {
        return (counterArr.filter(el=>el%2!==0)).length===1
    }
}
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    const strong1 = Math.max(yourLeft,yourRight)
    const strong2 = Math.max(friendsLeft,friendsRight)
    const weak1 = Math.min(yourLeft,yourRight)
    const weak2 = Math.min(friendsLeft,friendsRight)
    return strong1===strong2&&weak1===weak2?true:false;
}
function arrayMaximalAdjacentDifference(inputArray) {
    const arr = inputArray.map((el,i) => [el,inputArray[i+1]])
    const max = arr.map((el,i) => (arr[i])[1]!==undefined && Math.abs(el[0] - (arr[i])[1]))
    return Math.max(...max)
}
