let a = 8
let b=7
function add(a, b) {
    return a + b;
}

function sub(a,b){
    return a-b;
}

function multi(a,b){
    return a * b;
}

function div(a,b){
    if(b === 0){
        return "eror"
    }
    return a/b;
}

console.log(`Addition of ${a} and ${b}: ${add(a, b)}`);
console.log(`Subtraction of ${a} and ${b}: ${subtract(a, b)}`);
console.log(`Multiplication of ${a} and ${b}: ${multiply(a, b)}`);
console.log(`Division of ${a} by ${b}: ${divide(a, b)}`);