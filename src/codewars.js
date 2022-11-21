function findOdd(A) {
    A.sort((a, b) => a - b);
    let i = 0;
       if (A[i] === A[i + 1]) {
        A.shift()
        A.shift()
           findOdd(A)
    }  let y = A.length;
       if (A[y-2]===A[y-1]) {
        A.pop();
        A.pop();
           findOdd(A)
    }
        return +A.join('');



}

console.log(findOdd([ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10 ]));
