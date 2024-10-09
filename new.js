//(Q9).Write a javascript program to find out the largest of three given integers.

function findTheLargestNumber(a, b, c) {
    return Math.max(a, b, c);
    
}
const num1 = 3;
const num2 = 6;
const num3 = 5;

const largest = findTheLargestNumber(num1, num2, num3);
console.log(findTheLargestNumber(num1, num2, num3));

//function findLargest(a, b, c) {
  //  return Math.max(a, b, c);
//}

// Example usage:
//const num1 = 5;
//const num2 = 8;
//const num3 = 3;

//const largest = findLargest(num1, num2, num3);
//console.log("The largest number is:", largest); // Output: The largest number is: 8
