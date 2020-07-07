class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    makeNode = value => {
        const node = {};
        node.value = value;
        node.left = null;
        node.right = null;
        return node;
    }
}

BinarySearchTree.prototype.add = function(value) {
    var currentNode = this.makeNode(value);
    if (!this.root) {
        this.root = currentNode;
    } else {
        this.insert(currentNode);
    }
    return this;
};

BinarySearchTree.prototype.insert = function(currentNode) {
    const value = currentNode.value;
    const traverse = function(node) {
        //if value is equal to the value of the node, ignore
        //and exit function since we don't want duplicates
        if (value === node.value) {
            return;
        } else if (value > node.value) {
            if (!node.right) {
                node.right = currentNode;
                return;
            } else
                traverse(node.right);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = currentNode;
                return;
            } else
                traverse(node.left);
        }
    };
    traverse(this.root);
};

// const bst = new BinarySearchTree();
// bst.add(40).add(25).add(78).add(10).add(32);
// console.log('BS1', bst.root);


module.exports = BinarySearchTree;