// Quick sort
// Time complexity worst O(n^2) average O(n log n) best O(n log n)

const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])

const quickSort = (arr,, left = 0, right = arr.length - 1) => {
//   if (arr.length <= 1) return arr;

//   let pivotIdx = pivot(arr);
//   let left = arr.slice(0, pivotIdx);
//   let right = arr.slice(pivotIdx + 1);

//   return [...quickSort(left), arr[pivotIdx], ...quickSort(right)];

    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};
let data = [4, 8, 2, 1, 5, 7, 6, 3];
data = quickSort(data);
// console.log(data);

export default quickSort;
