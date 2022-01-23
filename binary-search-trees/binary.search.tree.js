class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

// Time complexity
// insertion O(log n)
// searching O(log n)

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertBT(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          current.count += 1;
          return this;
        }
      }
    }
  }

  //   find(value) {
  //     if (!this.root) {
  //       return 'Element is not in binary tree';
  //     }
  //     let current = this.root;
  //     let found = false;

  //     while (!found) {
  //       if (current) {
  //         if (value === current.value) {
  //           found = true;
  //           return current;
  //         } else if (value > current.value) {
  //           if (current.right) {
  //             current = current.right;
  //           } else {
  //             return 'Element is not in binary tree';
  //           }
  //         } else {
  //           if (current.left) {
  //             current = current.left;
  //           } else {
  //             return 'Element is not in binary tree';
  //           }
  //         }
  //       }
  //     }
  //   }
  find(val, node = this.root) {
    if (node === null) return 'Element is not in binary tree';
    if (val === node.value) return node;
    return val < node.value
      ? this.find(val, node.left)
      : this.find(val, node.right);
  }
}

let tree = new BinarySearchTree();
tree.insertBT(10);
tree.insertBT(2);
tree.insertBT(10);
tree.insertBT(15);
tree.insertBT(120);
tree.insertBT(10);
tree.insertBT(101);

console.log(tree.find(101));
console.log(tree.find(1010));

// console.log(tree);
