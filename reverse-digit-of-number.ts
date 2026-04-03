function reverseDigits(value:number):number{
    // Solution 1
    // const valueToString=value.toString().split("").reverse().join("");
    // return Number(valueToString);


    // Solution 2
    let reverseNumber=0;

    while(value!==0){
         reverseNumber=reverseNumber*10+(value%10);
         value=Math.floor(value/10)
    }

    return reverseNumber;
}


console.log(reverseDigits(12334))