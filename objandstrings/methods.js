/* 9. Write a JavaScript function to print all the methods in an JavaScript object.

```js
console.log(all_properties(Array));
["isArray", "from", "of"]
console.log(all_properties(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]
 */
function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(property => {
        return typeof obj[property] == "function";
    });
}
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));



