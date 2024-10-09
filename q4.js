  //(Q4).Write a javascript program to remove a character at the specified position
 //in a given string and return the modified  string.
     


//Define a function named remove _character that takes two parameters, str and char_pos 
  function remove_characters(str, char_pos) {
    //Extracts the substring from the begining of str up to(but not including) char_pos
  
    part1 = str.substring(0, char_pos);
    //Extract the substring from char_pos + 1 to the end of the str
    part2 = str.substring(char_pos +1,str.length);
//    return the concatenation of part1 and part2, effectively removing the character at char_pos
    return (part1 + part2);
    }
  
    //Log the result of calling the remove_characters function the remove_character function with the arguments
  //   "python"and 0 to the console
      console.log(remove_characters("alex", 0));
      
      //log the result of calling the remove_character function with the arguments "python" and 5 to the console
      console.log(remove_characters("christabel", 5));
  