function reverseString(s) {
  try {
    let splitString = s.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray);
  } catch (error) {
    
    console.log(error.message);
    console.log(s);
  }
}
