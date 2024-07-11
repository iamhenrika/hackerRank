function main() {
  var i = 4;
  var d = 4.0;
  var s = "HackerRank ";
  // Declare second integer, double, and String variables.
  var secondInteger, double, secondString;
  // Read and save an integer, double, and String to your variables.
  secondInteger = +readLine();
  double = +readLine();
  secondString = readLine();
  // Print the sum of both integer variables on a new line.
  console.log(i + secondInteger);
  // Print the sum of the double variables on a new line.
  console.log((d + double).toFixed(1));
  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + secondString);
}