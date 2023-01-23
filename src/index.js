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
    let res = [], newRes = [], newresFinal = [], final = '';
    for (let i = 0; i < expr.length; i += 10) {
        res.push(expr.slice(i, i + 10));
    }
    //console.log(res);
  
    let j = 0;
  
    res.forEach(item => {
        newRes[j] = '';
        for (let i = 0; i < item.length; i = i + 2) {
            // newRes[j] = '';
            if((item.slice(i, i + 2)) == '10' || (item.slice(i, i + 2)) == '11' || (item.slice(i, i + 2)) == '**') {
  
                newRes[j] = newRes[j] + item.slice(i, i + 2);
            }
        }
        j++;
    });
  
    //console.log(newRes);
  
    j = 0;
  
    newRes.forEach(item => {
        newresFinal[j] = '';
        for (let i = 0; i < item.length; i = i + 2) {
            // newRes[j] = '';
            if (item == '**********') {
                newresFinal[j] = ' ';
                // console.log(newresFinal[j].length);
          
            } else if (item.slice(i, i + 2) == '10') {
                newresFinal[j] = newresFinal[j] + '.';
         
            } else if (item.slice(i, i + 2) == '11') {
                newresFinal[j] = newresFinal[j] + '-';
           
            }
        }
        j++;
    });
  
    //console.log(newresFinal);
  
    for (let i = 0; i < newresFinal.length; i++) {
      if(newresFinal[i] === ' ') {
        final = final + ' ';
      } else {
        final = final + MORSE_TABLE[newresFinal[i]];
      }
    }
  
    //console.log(final);
    return final;
  
  }

module.exports = {
    decode
};