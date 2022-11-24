const findIndexOfLastLetter = (str) => {
    let arr = str.split('')
    arr.reverse()
    arr.map(m => +m)
    console.log(arr.map(m => +m))
    let counter = 0;
    while (!isNaN(arr[0])) {
        arr.shift()
        counter++;
    }
    return str.length - 1 - counter
}

console.log(findIndexOfLastLetter('fo99obar9729'))

