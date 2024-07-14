function processData(input) {
  //Enter your code here
  input = input.split("\n");

  let inputs = parseInt(input[0]);

  let map = new Map();
  for (let i = 1; i <= inputs; i++) {
    map.set(input[i].split(" ")[0], input[i].split(" ")[1]);
  }
  
  for (let h = inputs + 1; h < input.length; h++) {
    if (map.get(input[h]) != undefined) {
      console.log(input[h] + "=" + map.get(input[h]));
    } else {
      console.log("Not found");
    }
  }
}
