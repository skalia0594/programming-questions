// Depth first search
// is an algorithm for traversing or searching tree data structure.
// One starts at the root and explores as far as possible along each branch before backtracking.

const BinarySearchTree = require('./BST');

/* Let us create following BST 
              50 
           /     \ 
          30      70 
         /  \    /  \ 
       20   40  60   80 */
const bst = new BinarySearchTree();
bst.add(50).add(30).add(20).add(40).add(70).add(60).add(80);
// console.log('BS1', bst.root);

// pre-order traveersal
const dfsPreorder = node => {
    console.log(node.value);
    if(node.left) dfsPreorder(node.left);
    if(node.right) dfsPreorder(node.right);
}
console.log("Pre-Order Traversal");
dfsPreorder(bst.root);

// In-order traveersal
const dfsInorder = node => {
    if(node.left) dfsInorder(node.left);
    console.log(node.value);
    if(node.right) dfsInorder(node.right);
}
console.log("In-Order Traversal");
dfsInorder(bst.root);

// Post-order traveersal
const dfsPostorder = node => {
    if(node.left) dfsPostorder(node.left);
    if(node.right) dfsPostorder(node.right);
    console.log(node.value);
}
console.log("Post-Order Traversal");
dfsPostorder(bst.root);