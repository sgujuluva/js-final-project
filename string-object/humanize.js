/* Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd" */
function humanize(number){
    let convertString = number.toString();
    console.log(convertString)
     if(convertString.endsWith("1")){
    return `${number}st`;
    }else if(convertString.endsWith("2")){
        return `${number}nd`; 
    }
}
console.log(humanize(1)); 