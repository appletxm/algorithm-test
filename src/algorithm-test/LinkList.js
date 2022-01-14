function Node(el) {
  this.el = el
  this.next = null
}

const LinkList = function () {
  this.head = new Node('head')
}

LinkList.prototype = {
  find(el) {
    let curNode = this.head
    while (curNode.el !== el) {
      curNode = curNode.next
    }

    return curNode
  },

  findPrevious(el) {
    let curNode = this.head

    while (curNode.next !== null && curNode.next.el !== el) {
      curNode = curNode.next
    }

    return curNode
  },

  insert(newEl, el) {
    const newNode = new Node(newEl)
    const findNode = this.find(el)
    newNode.next = findNode.next
    findNode.next = newNode
  },

  remove (el) {
    const preNode = this.findPrevious(el)
    // const nextNode = this.find(el)
    if (preNode.next !== null) {
      preNode.next = preNode.next.next
    }
  },

  display() {
    let curNode = this.head
    while (curNode.next !== null) {
      console.info(curNode.next.el)
      curNode = curNode.next
    }
  }

}

export default LinkList
