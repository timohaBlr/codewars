export function solution(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
       if (!(i%3)) {
           sum+=i

       } else if (!(i%5)) {
           sum+=i;
       }
    }
    return sum
}


/** Если мы перечислим все натуральные числа меньше 10, которые кратны 3 или 5,
 * то получим 3, 5, 6 и 9. Сумма этих кратных чисел равна 23.
 * Доработайте решение так, чтобы оно возвращало сумму всех кратных 3 или 5 чисел ниже
 * переданного числа. Кроме того, если число отрицательное, верните 0 (для языков,
 * в которых они есть).
 * Примечание: Если число кратно и 3, и 5, считайте его только один раз.
 */


