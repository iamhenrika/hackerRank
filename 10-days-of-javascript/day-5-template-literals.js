function sides(literals, ...expressions) {
  let area = expressions[0];
  let perimeter = expressions[1];

  let s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  //console.log("s1: " + s1);
  let s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  //console.log("s2: " + s2);
  let array = [s1, s2];
  array = array.sort(function (a, b) {
    return a - b;
  });
  return array;
}
