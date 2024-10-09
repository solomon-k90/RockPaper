function smallestNumber(a, b, c){
if (a <= b && a <= c){
    return a;
}else if(b <=a && b <=c ) {
 return b;
}else {
    return c;
}
}
//const num1 = 4;
//const num2 = 5;
//const num3 = 0;
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question('Enter the first integer: ', (num1) => {
    rl.question('Enter the second integer: ', (num2) => {
        rl.question('Enter the third integer: ', (num3) => {
            // Convert inputs to integers
            var int1 = parseInt(num1, 10);
            var int2 = parseInt(num2, 10);
            var int3 = parseInt(num3, 10);

            var smallest = smallestNumber(num1, num2, num3);
            console.log("The smallest number:", smallest);

        });
    });
});
//var num1 = prompt("Enter the first integer:");
//var num2 = readInt("Enter the second integer:");
//var num3 = readInt("Enter the third integer:");

