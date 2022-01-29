import randomWords from 'random-words';
// generates a random array of words
import quickSort from '../sorting-algorithms/quick.sort.js';
const data = randomWords(50);

const randomIdx = Math.floor(Math.random() * data.length);

const sortedData = quickSort(data);
let item = sortedData[randomIdx];

// Time complexity: O(logn)

const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
};

console.log(binarySearch(sortedData, item));
console.log(binarySearch(sortedData, 'test'));

export default binarySearch;
