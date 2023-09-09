//https://leetcode.com/problems/squares-of-a-sorted-array/

const powArray = (numArray) => {
    let array = numArray.map((num) => {
        return Math.pow(num, 2)
    })
    return array
}

const sortArray = (theArray) => {


    let newPowArray = [...powArray(theArray)]
    return newPowArray.sort((a, b) => a - b)
}

const powArray1 = (numArray) => {
    let operationOnArray = 0
    let array = []

    for (let i = 0; i < numArray.length; i++) {

        operationOnArray = numArray[i] * numArray[i]
        array.push(operationOnArray)
        //
    }

    return array
}
console.log(powArray1([-4, -1, 0, 3, 10]))

const sortArray1 = (numArray) => {
    let = array = []
    if (1 <= numArray.length && numArray.length <= Math.pow(10, 4)) {
        let newPowArray = [...powArray1(numArray)]

        let i = 0
        let lengthArray = newPowArray.length
        while (i <= lengthArray - 1) {
            let min = Math.min.apply(null, newPowArray)
            let index = newPowArray.indexOf(min)
            newPowArray.splice(index, 1)
            array.push(min)
            i++
        }
    }


    return array
}

console.log('Con ciclos', sortArray1([-4, -1, 0, 3, 10]))


