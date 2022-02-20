function inOrder(root, orderList) {
  const { left, right } = root
  
  if (left) {
    inOrder(left, orderList)
  }

  orderList.push(root.data)
  
  if (right) {
    inOrder(right, orderList)
  }
}

function preOrder(root, orderList) {
  const { left, right } = root

  orderList.push(root.data)

  if (left) {
    preOrder(left, orderList)
  }
  if (right) {
    preOrder(right, orderList)
  }
}

function postOrder(root, orderList) {
  const { left, right } = root

  if (left) {
    postOrder(left, orderList)
  }
  if (right) {
    postOrder(right, orderList)
  }

  orderList.push(root.data)
}

const Node = class {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }

  show() {
    return this.data
  }
}

const Tree = class {
  constructor(node = null) {
    this.root = node
  }

  insert(node) {
    if (!this.root) {
      this.root = node
    } else {
      // const currenNode = this.root
      let parentNode = this.root

      while(true) {
        // parentNode = currenNode
        const left = parentNode.left
        const right = parentNode.right

        if (node.data < parentNode.data) {
          if (!left) {
            parentNode.left = node
            break
          } else {
            parentNode = left
          }
        } else {
          if (!right) {
            parentNode.right = node
            break;
          } else {
            parentNode = right
          }
        }
      }
    }
  }

  inOrder() {
    const orderList = []
    inOrder(this.root, orderList)
    return orderList
  }

  preOrder() {
    const orderList = []
    preOrder(this.root, orderList)
    return orderList
  }

  postOrder() {
    const orderList = []
    postOrder(this.root, orderList)
    return orderList
  }

  getMin() {
    let current = this.root
    while(current.left !== null) {
      current = current.left
    }

    return current.data
  }

  getMax() {
    let current = this.root
    while(current.right !== null) {
      current = current.right
    }

    return current.data
  }

  find(value) {
    let current = this.root

    while(current !== null) {
      const { data } = current
      if (value === data) {
        return current
      } else if (value < data) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return null
  }
}

export default { Node, Tree }

