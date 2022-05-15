//Create a Calculator Class
class Calculator{
    constructor(pi,eulner){
        this.pi = pi;
        this.eulner = eulner ;
    }
    ratio(x,y,width){
        let height = (width * y) / x;
        return `The Height is ${height} on ratio ${x} : ${y}`;
    }
    percentage(x,y){
        return ` The Percentage of ${x} in ${y} is ${x/y * 100}`;
    }
    add(x,y){
        return `The Sum of ${x} and ${y} is ${x + y}`;
    }
    subtract(x,y){
        return `The Subtraction of ${y} and ${x} is ${y - x}`;
    }
    multiply(x,y){
        return `The Multiplication of ${x} and ${y} is ${x * y}`;
    }
    divide(x,y){
        if(y === 0){
            return "Error";
        }
        return `The Division of ${x} / ${y}  is ${x/y}`;
    }
    modulation(x,y){
       let remainder = x % y;
        if(y === 0){
            return "Error";
        }
        return `The Remainder of ${x} % ${y}  is ${remainder}`;
    }
    elevate(x,y){
        let power = x**y;
        // let power = Math.pow(x,y);
        return `The Elevate of ${x} to ${y}  is ${power}`;
    }
    squareRoot(x){
        let sqrt = Math.pow(x,0.5);
        // let sqrt = Math.sqrt(x);
        return `The Squareroot of ${x}  is ${sqrt.toFixed(2)}`;
    }
}

let myCalculator = new Calculator(3.141592653589793,2.718281828459045);
console.log(myCalculator);

//ratio
console.log(myCalculator.ratio(4,5,7));

//percentage
console.log(myCalculator.percentage(4,5));

//sum
console.log(myCalculator.add(5 ,6));

// subtract
console.log(myCalculator.subtract(5 ,6));

// multiply
console.log(myCalculator.multiply(5 ,6));

//divide
console.log(myCalculator.divide(6 ,0));

//modulation
console.log(myCalculator.modulation(8 ,4));

//elevate
console.log(myCalculator.elevate(5 ,6));

//squareroot
console.log(myCalculator.squareRoot(6));