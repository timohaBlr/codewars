function incrementString(str) {
    const findIndexOfLastLetter = (str) => {
        let arr = str.split('')
        arr.reverse()
        arr.map(m => +m)
        let counter = 0;
        while (!isNaN(arr[0])) {
            arr.shift()
            counter++;
        }
        return str.length - 1 - counter
    }
    let lastLetterIndex = findIndexOfLastLetter(str)
    let arr = str.split('');
    let index = lastLetterIndex + 1
    let firstNum = arr[index]

    if (firstNum) {
        let strPart = arr.slice(0, index).join('');
        let numPart = arr.slice(index).join('');
        console.log(strPart, numPart)
        let numPartLength = arr.length - strPart.length
        numPart++;
        let differ = numPartLength - String(numPart).length
        for (let i = 0; i < differ; i++) {
            strPart += '0'
        }
        return strPart + numPart;
        console.log(strPart)

    } else return str + '1';
}


console.log('function return:' + ' ' + incrementString('fo99obar979'))
//arr.indexOf(item, from)

/*
doTest("foobar000", "foobar001");
doTest("foobar999", "foobar1000");
doTest("foobar00999", "foobar01000");
doTest("foo", "foo1");
doTest("foobar001", "foobar002");
doTest("foobar1", "foobar2");
doTest("1", "2");
doTest("009", "010");
doTest("fo99obar99", "fo99obar100");*/
