export function solution(str) {
    let arr = str.split('')
    if (arr.length % 2) {
        arr.push('_')
    }
    let newArr=[];
    let lastArr = []
   for (let i = 0; i< arr.length; i++){
       if (!(i%2)) {
           newArr.push(arr[i])
           newArr.push(arr[i+1])
           lastArr.push(newArr.join(''))
           newArr = []
       }
   }
    return lastArr
}


/** Доработайте решение так, чтобы оно разбивало строку на пары из двух символов.
 * Если строка содержит нечетное количество символов, то замените недостающий второй символ последней пары
 * знаком подчеркивания ('_').

 Examples:

 * 'abc' =>  ['ab', 'c_']
 * 'abcdef' => ['ab', 'cd', 'ef']
 */


