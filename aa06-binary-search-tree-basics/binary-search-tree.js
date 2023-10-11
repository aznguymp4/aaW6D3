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
    if(!currentNode) return
    console.log(currentNode.val);
    ['left','right'].map(d => this.preOrderTraversal(currentNode[d]))
  }
  
  
  inOrderTraversal(currentNode = this.root) {
    // Your code here 
    if(!currentNode) return
    console.log((this.inOrderTraversal(currentNode.left) || currentNode).val)
    this.inOrderTraversal(currentNode.right)
  }
  
  
  postOrderTraversal(currentNode = this.root) {
    // Your code here 
    if(!currentNode) return
    ['left','right'].map(d => this.postOrderTraversal(currentNode[d]))
    console.log(currentNode.val)
  }
  
  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here 
    let q = [this.root]

    while(q.length) {
      let first = q.shift()
      console.log(first.val);
      ['left','right'].map(d => {
        if(first[d]) q.push(first[d])
      })
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let s = [this.root]

    while(s.length) {
      let first = s.pop()
      console.log(first.val);
      ['left','right'].map(d => {
        if(first[d]) s.push(first[d])
      })
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
