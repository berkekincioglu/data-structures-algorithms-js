import randomWords from 'random-words';
// generates a random array of words

const data = randomWords(50);

const randomIdx = Math.floor(Math.random() * data.length);
let item = data[randomIdx];

console.log(item);
// console.log(data);
// console.log(sortedData);

// Big O notation: O(n)

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch(data, item));
// console.log(linearSearch(data, 'test'));

export default linearSearch;
