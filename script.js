if (5 > 2) {
  console.log("IF statement here!");

  if (1 > 3) {
    console.log("nested IF statement");


  } else {
    console.log("nested ELSE statement");

  }
}
else {
  console.log("regular ELSE statement");

}

/* first statement is TRUE, console logs 'if statement is here!', JS moves on to the next line of the same 'if' condition, that nested condition is FALSE, JS now moves onto the ELSE statement, but which one? it moves to the nested one! because JS is not finished with the nested condition, it needs some result from it, then it stops and dont moves to the other ELSE statement  */



