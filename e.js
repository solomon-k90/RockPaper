//function addUpNumber (a, b){
  //  return (a + b);

//}
//console.log(addUpNumber(2, 8));


//var sum = 18 + 4
//console.log(sum);

function remove_characters (str, char_pos) {
part1 = str.substring(0, char_pos);
part2 = str.substring(char_pos +1, str.length);

return (part1 + part2);
}
console.log(remove_characters("man", 2));
console.log(remove_characters("woman", 0));



//function remove_characters(str, char_pos) {
  //part1 = str.substring(0, char_pos);
//  part2 = str.substring(char_pos +1, str.length);
  
  //    return (part1 + part2);
 // }
  //console.log(remove_characters("ethanol", 0));
  //console.log(remove_characters("garri", 3));