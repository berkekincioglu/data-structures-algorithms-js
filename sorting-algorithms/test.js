import bubbleSort from './bubble.sort.js';
import insertionSort from './insertion.sort.js';
import selectionSort from './selection.sort.js';
import mergeSort from './merge.sort.js';

let data = Array.apply(null, { length: 10000 }).map(Function.call, Math.random);

const calculateTime = (start, end, func) => {
  let time = end - start;
  console.log(`${func} took ${time} ms`);
  console.log(`${func} took ${time / 1000} seconds`);
  console.log(`${func} took ${time / 1000 / 60} minutes`);
  console.log(`${func} took ${time / 1000 / 60 / 60} hours`);
  console.log(`${func} took ${time / 1000 / 60 / 60 / 24} days`);
  console.log(`${func} took ${time / 1000 / 60 / 60 / 24 / 365} years`);
  console.log(
    `${func} took ${time / 1000 / 60 / 60 / 24 / 365 / 100} centuries`
  );
  console.log(
    `${func} took ${time / 1000 / 60 / 60 / 24 / 365 / 100 / 10} millenia`
  );
};

let startTime = performance.now();

data = bubbleSort(data);

let endTime = performance.now();
calculateTime(startTime, endTime, 'bubbleSort');

// console.log(`bubble sort ${endTime - startTime} milliseconds`);

startTime = performance.now();

data = selectionSort(data);

endTime = performance.now();

// console.log(`selection sort ${endTime - startTime} milliseconds`);
calculateTime(startTime, endTime, 'selectionSort');

startTime = performance.now();

data = insertionSort(data);

endTime = performance.now();

// console.log(`insertion sort ${endTime - startTime} milliseconds`);
calculateTime(startTime, endTime, 'insertionSort');

startTime = performance.now();

data = mergeSort(data);

endTime = performance.now();
calculateTime(startTime, endTime, 'mergeSort');
// console.log(`merge sort ${endTime - startTime} milliseconds`);
