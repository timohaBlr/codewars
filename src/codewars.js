let snail = function (array) {
    let answer = []
    let length = array.length
    for (let i = 0; i < length; i++) {
        answer= [...answer, ...array[0]]
        array.shift();
        for (let j = 0; j < array.length; j++) {
            answer.push(array[j].pop())
        }
        array = array.map(m => m.reverse()).reverse();
    }
    return answer
}