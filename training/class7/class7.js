/**
 * Your task is to make a function that can take any non-negative
 *  integer as an argument and return it with its digits in descending order.
 * Essentially, rearrange the digits to create the highest possible number.
 */

const reverseNum = (num) => {
    if (typeof num !== 'number' && num < 0) {
        return 'Error'
    }

    console.log('Hola')
    //https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
}

reverseNum(22438743750)


//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript


const reverseNumDos = (number) => {
    if (typeof number !== 'number' && number < 0) {
        return 'Error'
    }

    let numberArray = number.toString().split('').reverse()//.join('')

    let arrayOrder = numberArray.sort((a, b) => b - a)
    console.log(arrayOrder.join(''))
}

//reverseNumDos(6998)


