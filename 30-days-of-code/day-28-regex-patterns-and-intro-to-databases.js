function main() {
  let N = parseInt(readLine());
  let names = [];
  for (let x = 0; x < N; x++) {
    let first = readLine().split(" ");
    let firstName = first[0];
    let emailID = first[1];
    if (emailID.match(/@gmail\.com$/)) {
      names.push(firstName);
    }
  }
  names.sort().forEach((firstName) => console.log(firstName));
}
