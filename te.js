function removeCharacterAtPosition (str, position){
    if (position < 0 || position >= str.length){
      throw new error ('position is out of range')
    }
    const before = str.slice(0, position);
    const after = str.slice(position + 1);
    
    return before + after;
    }
    const originalString = "going down";
    const postionToRemove = 3;
    
    try{
    const modifiedString = removeCharacterAtPosition(originalString, positionToRemove);
    console.log(modifiedString);
    
    }catch(error) {
    console.error(error.message)
    }
     