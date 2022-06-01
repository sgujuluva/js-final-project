/* Write a JavaScript function to alphabetize a given string.
Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
console.log(alphabetize_string("United States"));
//"SUadeeinsttt" */
function alphabetize(string){
    let array = string.split("");
    return array.sort().join("");
}
console.log(alphabetize("United States"));