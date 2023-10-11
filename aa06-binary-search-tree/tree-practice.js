const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here 
  let leftMost = rootNode
  while(leftMost.left) leftMost = leftMost.left
  return leftMost.val
}

function findMaxBST (rootNode) {
  // Your code here 
  let rightMost = rootNode
  while(rightMost.right) rightMost = rightMost.right
  return rightMost.val
}

function findMinBT (rootNode) {
  // Your code here
  let lowest = rootNode.val
  let q = [rootNode]

  while(q.length) {
    let first = q.pop()
    lowest = Math.min(lowest, first.val);
    ['left','right'].map(d => {
      if(first[d]) q.push(first[d])
    })
  }

  return lowest
}

function findMaxBT (rootNode) {
  // Your code here 
  let highest = rootNode.val
  let q = [rootNode]
  
  while(q.length) {
    let first = q.pop()
    highest = Math.max(highest, first.val);
    ['left','right'].map(d => {
      if(first[d]) q.push(first[d])
    })
  }
  
  return highest
}

function getHeight (rootNode) {
  // Your code here 
  if(!rootNode) return -1
  if(!(rootNode.left || rootNode.right)) return 0;

  return Math.max(...['left','right'].map((d,i,a) => {
    let height = 0
    let idk = rootNode[d]
    while(idk) {
      idk = idk[a[i%2]] || idk[a[(i+1)%2]]
      height++
    }
    return height
  }))
}

function balancedTree (rootNode) {
  // Your code here 
  if(!rootNode) return false
  if(!(rootNode.left || rootNode.right)) return false;
  
  const [leftHeight, rightHeight] = ['left','right'].map((d,i,a) => {
    let height = 0
    let idk = rootNode[d]
    while(idk) {
      idk = idk[a[i%2]] || idk[a[(i+1)%2]]
      height++
    }
    return height
  })

  return Math.abs(leftHeight-rightHeight) <= 1
}

function countNodes (rootNode) {
  // Your code here 
  let count = 0
  let q = [rootNode]
  
  while(q.length) {
    let first = q.pop()
    count++
    ['left','right'].map(d => {
      if(first[d]) q.push(first[d])
    })
  }
  
  return count
}

function getParentNode (rootNode, target) {
  // Your code here 
  if(rootNode.val === target) return null
  let lastNode = null
  let q = [rootNode]
  
  while(q.length) {
    let first = q.pop()
    if(first.val === target) return lastNode;
    ['left','right'].map(d => {
      if(first[d]) {
        q.push(first[d])
        lastNode = first
      }
    })
  }
  return undefined
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
  const targetStr = target.toString()
  let prev = null
  let map = {}
  const pushToArrSorted = (currentNode) => {
    if(!currentNode || map[targetStr]) return
    const key = (pushToArrSorted(currentNode.left) || currentNode).val
    map[key] = prev
    prev = key
    pushToArrSorted(currentNode.right)
  }
  pushToArrSorted(rootNode)
  return map[targetStr]
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent
  let parentNode
  let currentNode

  if(target==rootNode.val) {
    currentNode = rootNode
  } else {
    let node = rootNode
    while(node) {
      let oldNode = node
      node = node[target < node.val? 'left' : 'right']
      if(node?.val === target) {
        parentNode = oldNode
        currentNode = node
      }
      // console.log('======================= ',currentNode.val, parentNode.val)
    }
    if(!currentNode) return undefined
  }

  // console.log('======================= ', currentNode.val, parentNode.val)

  // Case 0: Zero children and no parent:
  if(rootNode.val === target) {
    //   return null
    return null
  }

  // Case 1: Zero children:
  if(!(currentNode.left || currentNode.right)) {
    //   Set the parent that points to it to null
    parentNode[target < parentNode.val? 'left' : 'right'] = null
  }

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  if((currentNode.left && !currentNode.right) || (!currentNode.left && currentNode.right)) {
    const child = currentNode.left || currentNode.right
    //   Make the parent point to the child
    parentNode[target < parentNode.val? 'left' : 'right'] = child
  }

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
