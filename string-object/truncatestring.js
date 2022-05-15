/* Write a JavaScript function to truncate a string to a certain number of words.
console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox" */

function truncateString(string,size){
    let stringSplit = string.split(" ");
        for(let i= 0; i < stringSplit.length ; i++){
            // console.log(stringSplit[i])
         return  stringSplit.slice(0,size).join(" ");
        }
}
console.log(truncateString("The quick brown fox jumps over the lazy dog", 4));