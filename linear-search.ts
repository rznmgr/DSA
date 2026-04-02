// In Linear Search, we iterate over all the elements of the array and check 
// if it the current element is equal to the target element. If we find any element
//  to be equal to the target element, then return the index of the current element.
//  Otherwise, if no element is equal to the target element, then return -1 as the 
// element is not found. Linear search is also known as sequential search.


function linearSearch(arr:number[],target:number):number{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target)
            return i;
    }
    return -1;
}


console.log(linearSearch([1,2,3,4,5,6,7,8],8))
console.log(linearSearch([1,2,3,4,5,6,7,8],9))