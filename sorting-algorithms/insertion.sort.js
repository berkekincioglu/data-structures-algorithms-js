// Insertion sort

// Time complexity worst average O(n^2) - quadratic best O(n) - linear

const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

// let arr = [20, 10, 2, 3, 54, 334];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      if (arr[j] > currentVal) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const insertionSort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

// arr = insertionSort2(arr);
// console.log(arr);

export default insertionSort;
