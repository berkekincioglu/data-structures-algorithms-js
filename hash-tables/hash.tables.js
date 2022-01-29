//  time complexity: Hash tables are O(1) for all operations.

// const hash = (key, arrLen) => {
//   let total = 0;
//   let WEIRD_PRIME = 1949;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * WEIRD_PRIME + value) % arrLen;
//   }
//   return total;
// };

// console.log(hash('cyan', 10));
// console.log(hash('Pink', 10));
// console.log(hash('pink', 10));

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 1949;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

let HT = new HashTable();

HT.set('hello world', 'goodbye world');
HT.set('cats', 'dogs');
HT.set('cows', 'bulls');
HT.set('numbers', 'words');

// console.log(HT.keyMap);
console.log(HT.get('hello world'));
// console.log(HT.get('y world'));
