const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let decoded = ''
  let arr = [];
  let letter = '';

  while (expr.length > 0) {
    arr.push(expr.substr(0, 10));
    expr = expr.slice(10, expr.length);
  }
  for (let a of arr) {
    if (a === '**********') {
      decoded += ' ';
    } else {
      for (let i = 0; i < a.length; i +=2) {
        if (a[i] === '1' && a[i + 1] === '0') {
          letter += '.'
        } else if (a[i] === '1' && a[i + 1] === '1') {
          letter += '-'
        }
      }
       decoded += MORSE_TABLE[letter]
       letter = '';
    }
  }
  return  decoded
}

module.exports = {
    decode
}