function getSecondLargest(nums) {
  // Complete the function
  const sortedArray = nums.sort((a, b) => a - b);
  const newSortedArray = [...new Set(sortedArray)];
  return newSortedArray[newSortedArray.length - 2];
}
