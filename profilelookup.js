//setup
var contacts = [
{   
    "firstName": "Akira",
     "lastName": "lainie",
     "number": "093020",
     "likes":   ["pizza", "coding", "Brownie points"]
},
{
    "firstName": "Harry",
     "lastName": "Potter",
     "number": "0994372684",
     "likes":   ["Hogwarts", "Margic", "Hagrid"]
},
{
    "firstName": "moses",
     "lastName": "Aaron",
     "number": "09083202233",
     "likes":   ["Skipping classes", "Gaming", "Lying"]
},
{
    "firstName": "Adah",
     "lastName": "Rapheal",
     "number": "08046378828",
     "likes":   ["pizza", "board games", "Playing soccer"]
}
];



function lookUpProflie(name, prop) {
   for (var i = 0; i < contacts.lenght; i++) {
    if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
    } 
   } 
  return "No such contacts"; 
}

//change these values to test your functions
var data = lookUpProflie("Adah", "lastName");

console.log(data);


function randomFraction(){


    return Math.random();
}
console.log(randomFraction());



