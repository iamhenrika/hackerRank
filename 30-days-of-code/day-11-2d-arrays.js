function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  var largestSum = -63;
  var sum = 0;
  for (let i = 0; i < 4; i++) {
    for (let h = 0; h < 4; h++) {
      sum =
        arr[i][h] +
        arr[i][h + 1] +
        arr[i][h + 2] +
        arr[i + 1][h + 1] +
        arr[i + 2][h] +
        arr[i + 2][h + 1] +
        arr[i + 2][h + 2];
      if (sum > largestSum) {
        largestSum = sum;
      }
    }
  }

  console.log(largestSum);
}
