function reverseString(str) {
    if (str === "") {
        return str;
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

const originalString = "palmer";
const reversedString = reverseString(originalString);
console.log("Reversed string:", reversedString); 
