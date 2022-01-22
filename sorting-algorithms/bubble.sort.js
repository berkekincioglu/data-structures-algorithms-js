//Bubble sort

const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

// Sort way

// const swap = (array, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

let arr = [20, 10, 2, 3, 54, 334];

const bubbleSort = (arr) => {
  for (let i = 2; i < arr.length; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

arr = bubbleSort(arr);
console.log(arr);
