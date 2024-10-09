
//function remove_characters(str, char_pos) {
   // part1 = str.substring(0, char_pos);
 //   part2 = str.substring(char_pos +1, str.length);
    
   // return (part1 + part2);
  //  }
    //console.log(remove_characters("man", 2));
  //  console.log(remove_characters("woman", 0));
  //function remove_character(str, char_pos){
//    part1 =str.substring(char_pos, 0 );
   // part2 = str.substring(char_pos +1, str.length);
    
    //return (part1 + part2);
    
    //}
    //console.log(remove_character("brocode", 3));
   // console.log(remove_character("darkoo", 1));

   function remove_character (str, char_pos){

    part1 = str.substring(char_pos, 0);
    part2 = str.substring(char_pos +1, str.length);
    
    return(part1 + part2);
    }
    console.log(remove_character("hitman", 4));
    console.log(remove_character("dickson", 2));