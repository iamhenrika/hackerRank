function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine().trim(), 10);
   let i;
    for(i = 1;i <= 10;i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}