//5.Write a javascript program to create a new string from a given string by changing the 
//position of the first and last characters. The string lenght must be broader than or equal to 1. 
 //Define a function named first_last that takes a parameter str1
 function first_last(str1){
 // check if the length of str1 is less than or equal to 1
 if(str1.length <=1){
 // if true, return str1 as is 
 return str1;
 }
 //Extract the substring from the second character to the second-to-last 
  //charater of str1
  mid_char=str1.substring (1,str1.length -1);
 //return the last character of str1 followed by mid_char and then the first 
  //character of str1
return (str1.charAt(str1.length-1)) + mid_char + str1.charAt(0);
}

// Log the result of calling the first_last function with the argument 'a' to the console
 console.log(first_last('a'));

//log the result of cslling the first_last function with the argument 'ab' to the console
console.log(first_last('ab'));

//log the result of calling the first_last function with the argument 'abc' to the console
console.log(first_last('abc'));
