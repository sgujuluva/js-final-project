/* Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd" */
function humanize(number){
    let convertString = number.toString();
    if(convertString.endsWith("0")){
        return `${number}th`;
    }else if(convertString.endsWith("1")){
    return `${number}st`;
    }else if(convertString.endsWith("2")){
        return `${number}nd`; 
    }else if(convertString.endsWith("3")){
        return `${number}rd`; 
    }else{
        return `${number}th`; 
    }
}
console.log(humanize(1)); 
console.log(humanize(20));
console.log(humanize(302));
console.log(humanize(9));
