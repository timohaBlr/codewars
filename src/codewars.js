function triangle(row) {
    if (row.length === 1) return row;
      for (let i = 0; i < row.length - 1; i++) {
        let supposed = row.slice(i, i + 2)
        let letter = '';
        switch (supposed) {
            case 'RB':
            case 'BR':
                letter = 'G';
                break;
            case 'RG':
            case 'GR':
                letter = 'B';
                break;
            case 'BG':
            case 'GB':
                letter = 'R';
                break;
            case 'BB':
                letter = 'B';
                break;
            case 'RR':
                letter = 'R';
                break;
            case 'GG':
                letter = 'G';
                break;
        }
        row = '';
        row += letter;
       // console.log(row)
    }
    triangle(row)
    return row;
}

triangle('RBRGBRBGGRRRBGBBBGG');
console.log(triangle('RGBG'))
