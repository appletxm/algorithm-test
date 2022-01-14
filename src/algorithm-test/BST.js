function Node(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
}

Node.prototype = {
  show() {
    return this.data
  }
}

const BST = function() {
  this.root = null
}

BST.prototype = {
  insert(data) {
    const node = new Node(data, null, null)
    if (this.root === null) {
      this.root = node
    } else {
      let current = this.root
      let parent = null

      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            parent.left = node
            break
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = node
            break
          }
        }
      }
    }
  },

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left)
      console.info(node.show() + ' ')
      this.inOrder(node.right)
    }
  },

  preOrder(node) {
    if (node !== null) {
      console.info(node.show() + '')
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  },

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.info(node.show() + '')
    }
  },
  getMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }

    return current.data || this.root.data
  },

  getMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }

    return current.data || this.root.data
  },

  search(data) {
    let current = this.root
    let node = null

    while (current !== null) {
      if (data === current.data) {
        node = current
        break
      } else {
        if (data < current.data) {
          current = current.left
        } else {
          current = current.right
        }
      }
    }

    return node
  },

  remove(data) {
    this.removeNode(this.root, data)
    // console.info('remove root:', root)
  },
  removeNode(node, data) {
    if (node === null) {
      return null
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null
      }
      if (node.left === null) {
        return node.right
      }
      if (node.right === null) {
        return node.left
      }
      const tempNode = this.getSmallestRightNode(node.right)
      node.data = tempNode && tempNode.data
      node.right = this.removeNode(node.right, tempNode && tempNode.data)
      return node
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else {
      node.right = this.removeNode(node.right, data)
      return node
    }
  },

  getSmallestRightNode(node) {
    let rightNode = node.right
    let min = node.data
    let minNode = node

    while (rightNode) {
      rightNode = rightNode.right
      if (!rightNode) {
        break
      }
      if (rightNode.data < min) {
        min = rightNode.data
        minNode = rightNode
      }
    }

    console.info('the smallest right node:', minNode)

    return minNode
  },

  getBiggestLeftNode(node) {
    let leftNode = node.left
    let max = node.data
    let maxNode = node

    while (leftNode) {
      leftNode = leftNode.left
      if (!leftNode) {
        break
      }
      if (leftNode.data > max) {
        max = leftNode.data
        maxNode = leftNode
      }
    }

    return maxNode
  }
}

export default BST
