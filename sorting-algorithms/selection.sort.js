// Selection sort
// Time complexity worst average best O(n^2) - quadratic

const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

// let arr = [20, 10, 2, 3, 54, 334];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }

    if (i !== smallest) swap(arr, i, smallest);
  }
  return arr;
};

// arr = selectionSort(arr);
// console.log(arr);

export default selectionSort;
