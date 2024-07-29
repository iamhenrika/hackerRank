let output = [];
let queue = [];
let currentNode = root;
queue.push(currentNode);
let currentLevel = 1;
while (queue.length) {
  currentNode = queue.shift();
  currentLevel--;
  output.push(currentNode);

  if (currentNode.left) {
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }

  if ((currentLevel = 0)) {
    currentLevel = queue.length;
  }
}

let newArr = [];
output.forEach((node) => {
  newArr.push(node.data);
});
console.log(newArr.join(" "));
