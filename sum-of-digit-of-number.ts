// Input: n = 687
// Output: 21
// Explanation: The sum of its digits are: 6 + 8 + 7 = 21


function sumOfDigitOfTheNumber(value:number):number{
    if(value===0)
        return 0;

    return (value%10)+sumOfDigitOfTheNumber(Math.floor(value/10))
}

console.log(`The sum of digits of 12 is ${sumOfDigitOfTheNumber(12)}`)
console.log(`The sum of digits of 1231212 is ${sumOfDigitOfTheNumber(1231212)}`)