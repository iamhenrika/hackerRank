function processData(input) {
  //Enter your code here
  input = input.split("\n");

  for (let i = 1; i < input.length; i++) {
    let split = input[i].split("");

    var even = "";
    var odd = "";

    for (let h = 0; h < split.length; h++) {
      if (h % 2 == 0) {
        even += split[h];
      } else {
        odd += split[h];
      }
    }

    console.log(even + " " + odd);
  }
}
