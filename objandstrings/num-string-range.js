/* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

```js
console.log(num_string_range("a", "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
``` */
function num_string_range(start, end, step) 
  {
    let result = [];
    
    if (end < start) {
        step = -step;
    }

    if (typeof start == "number") {

        while (step > 0 ? end >= start : end <= start) {
            result.push(start);
            start += step;
        }
        } 
    else if (typeof start == "string") {  

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            console.log(start)
            result.push(String.fromCharCode(start));
            start += step;
        }

    }
   return result ;
}

console.log(num_string_range("a", "z", 2));