/* Write a JavaScript function to get the successor of a string.
Note: The successor is calculated by incrementing characters starting from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the string. Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. If the increment generates a carry, the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.

string.successor("abcd"); // "abce"
string.successor("THX1138"); // "THX11r3a9"
string.successor("< >"); // "< >"
string.successor("1999zzz"); // "20dd00aaa"
string.successor("ZZZ9999"); // "AAAA0000" */

function successor(str) {
   
    let increaseSucc1 = (str.slice(0,-1));
    //console.log(increaseSucc1);
   
    let incSucc2=  parseInt(str.slice(-1)) + 1;
    //console.log(incSucc2);

    let increase = increaseSucc1 + incSucc2;
    return increase; 
    /* let number = "0123456789";
    if(number.includes(str)){ 
  } */
 
}


function successor(str) {
    let  alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let  length = alphabet.length;
       let result = str;
     let i = str.length;

    while(i >= 0) {
        let last = str.charAt(--i), // to retrive the last character
            next = '',
            carry = false;

        if (isNaN(last)) {
            index = alphabet.indexOf(last.toLowerCase());

            if (index === -1) {
                next = last;
                carry = true;
            }
            else {
                var isUpperCase = last === last.toUpperCase();
                next = alphabet.charAt((index + 1) % length);
                if (isUpperCase) {
                    next = next.toUpperCase();
                }

                carry = index + 1 >= length;
                if (carry && i === 0) {
                    var added = isUpperCase ? 'A' : 'a';
                    result = added + next + result.slice(1);
                    break;
                }
            }
        }
        else {
            next = +last + 1;
            if(next > 9) {
                next = 0;
                carry = true;
            }

            if (carry && i === 0) {
                result = '1' + next + result.slice(1);
                break;
            }
        }

        result = result.slice(0, i) + next + result.slice(i + 1);
        if (!carry) {
            break;
        }
    }
    return result;
}

console.log(successor('abcd'));
console.log(successor('3456'));
console.log(successor("2000aaa"));
console.log(successor('abce'));
