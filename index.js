// Code your solution here!
function printString(myString) {
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
  }
}

function reverseString(myString) {
    
}
