function pigIt(str) {
    return str.split(' ')
        .map(m => (m !== '?' && m !== ',' && m !== '.' && m !== '!')
            ? m.slice(1) + m.slice(0, 1) + 'ay'
            : m
        )
        .join(' ')
}

console.log(pigIt('Pig latin is cool')) //igPay atinlay siay oolcay
console.log(pigIt('Hello world !')) //elloHay orldway !
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

