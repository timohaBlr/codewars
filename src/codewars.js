function partlist(arr) {
    let firstArr = [];
    let resulArr = [];
    let answer = [];
    while (arr.length > 1) {
        firstArr.push(arr.shift())
resulArr = [firstArr.join(' '), arr.join(' ')]
        answer.push(resulArr)
       // console.log(firstArr.join(' '))
       // console.log(arr.join(' '))

      //console.log(resulArr)
    }
return answer;
}

console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]))

partlist(["az", "toto", "picaro", "zone", "kiwi"])
