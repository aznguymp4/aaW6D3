// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here 
    this.root = null
  }

  insert(val, currentNode=this.root) {
    // Your code here 
    if(!currentNode) return this.root = new TreeNode(val)

    const dir = val < currentNode.val? 'left' : 'right'
    if(currentNode[dir]) this.insert(val, currentNode[dir])
    else currentNode[dir] = new TreeNode(val)
  }

  search(val) {
    // Your code here
    if(val===this.root.val) return true
    
    let node = this.root
    while(node) {
      node = node[val < node.val? 'left' : 'right']
      if(node?.val === val) return true
    }
    return false
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here 
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here 
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here 
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here 
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here 
  }
}

module.exports = { BinarySearchTree, TreeNode };
