function moveZeros(arr) {
    let countZero = 0;
    let newArr = arr.reduce((acc, item, index) => {
        if (item !== 0) {
            return [...acc, item]
        } else {
            countZero += 1;
            return acc
        }
    }, [])
    while (countZero > 0) {
        countZero--
        newArr.push(0)
    }
    return newArr
}
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]