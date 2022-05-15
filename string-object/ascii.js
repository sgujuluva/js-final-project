/* Write a JavaScript function to convert ASCII to Hexadecimal format.
console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030 */
function asciiToHexa(string){
    let array = [];
    for(let i = 0; i < string.length; i++){
       let hex = Number(string.charCodeAt(i).toString(16));
       array.push(hex);
    }
    return array.join("");
}
console.log(asciiToHexa("12")); //3132
console.log(asciiToHexa("100")); //313030 */