//function remove_characters(str, char_pos) {
  //part1 = str.substring(0, char_pos);
  //part2 = str.substring(char_pos +1, str.length);
  
   //   return (part1 + part2);
  //}
 // console.log(remove_characters("ethanol", 3));
 // console.log(remove_characters("garri", 0));
  
 
//function remove_characters (str, char_pos){
  //part1 = str.substring(0, char_pos);
  //part2 = str.substring(char_pos +1, str.length)
 
  //return (part1 + part2);
//}

  //console.log(remove_characters("maths", 0));
  //console.log(remove_characters("english", 5));

  //function remove_characters(str, char_pos){
    //part1 = str.substring(0, char_pos);
    //part2 = str.substring(char_pos +1, str.length);
    
    //return (part1 + part2);
    //}
    //console.log(remove_characters("panther", 0));
    //console.log(remove_characters("leopard", 3));
    
    function remove_character(str, char_pos){
      part1 = str.substring(0, char_pos);
      part2 = str.substring(char_pos +1, str.length);
      return (part1 + part2)
      }
      console.log(remove_character("eat", 2));
      console.log(remove_character("drinks", 3));