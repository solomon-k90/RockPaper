function removeCharacterAtPosition(str, position) {
    // Ensure the position is a valid number
    if (position < 0 || position >= str.length) {
        throw new Error('Position is out of range');
    }
    
    // Use slice to get the parts before and after the character to be removed
    const before = str.slice(0, position);
    const after = str.slice(position + 1);
    
    // Concatenate the parts to get the final string
    return before + after;
}

// Example usage:
const originalString = "Hello, friends!";
const positionToRemove = 7;

try {
    const modifiedString = removeCharacterAtPosition(originalString, positionToRemove);
    console.log(modifiedString);  // Outputs: "Hello, friends!"
} catch (error) {
    console.error(error.message);
}
