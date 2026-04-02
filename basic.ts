// Check even or Odd

function isEvenOrOdd(value: number): string {
    if (value % 2 === 0)
        return `${value} is a even number`;
    else
        return `${value} is an odd number`;
}

console.log(isEvenOrOdd(23))
console.log(isEvenOrOdd(2))
console.log("-----------------------")


// Multiplication Table

function multiplicationTable(value: number): void {
    for (let i = 1; i <= 10; i++) {
        console.log(`${value}*${i}=${value * i}`)
    }
}

multiplicationTable(23)
console.log("-----------------------")


// Sum of first n natural numbers
function sumOfNNaturalNumbers(to:number){
    let sum=0;
    for(let i=1;i<=to;i++){
        sum+=i
    }
    return sum
}

console.log(`The sum of first 20 natural numbers is ${sumOfNNaturalNumbers(20)}`)
console.log("-----------------------")


// Sum of square of first n natural numbers
function sumOfSquareOfNNaturalNumbers(to:number){
    let sum=0;
    for(let i=1;i<=to;i++){
        sum+=i*i
    }
    return sum
}

console.log(`The sum of square of  first 20 natural numbers is ${sumOfSquareOfNNaturalNumbers(20)}`)
console.log("-----------------------")


// Swap two numbers without third number
function swapOfTwoNumbers(first:number,second:number){
    first=first+second;
    second=first-second;
    first=first-second;
    return {first,second}
}

console.log(swapOfTwoNumbers(13,23))
console.log("-----------------------")


// You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. The numbers are in 
// the range of 1 to 6, like any ordinary dice. You will be provided with a face of this cube, your task is to guess the 
// number on the opposite face of the cube.

function oppositeFaceOfDice(side:number){
    let oppositeSide=7-side;
    return oppositeSide
}

console.log(`Opposite side of 1 is ${oppositeFaceOfDice(1)}`)
console.log(`Opposite side of 2 is ${oppositeFaceOfDice(2)}`)
console.log(`Opposite side of 3 is ${oppositeFaceOfDice(3)}`)