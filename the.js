function getRandomInteger(min, max) {
    return Math.floor(math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInteger(0, 100);
console.log(randomNumber);


//function getRandomInteger(min, max) {
  //  return Math.floor(Math.random() * (max - min + 1)) + min;
//}

// Example usage:
//const randomNumber = getRandomInteger(0, 100);
//console.log(randomNumber); // Logs a random integer between 1 and 10, inclusive
