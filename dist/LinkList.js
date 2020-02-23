function Node(el) {
  this.el = el;
  this.next = null;
}

var LinkList = function LinkList() {
  this.head = new Node('head');
};

LinkList.prototype = {
  find: function find(el) {
    var curNode = this.head;
    while (curNode.el !== el) {
      curNode = curNode.next;
    }

    return curNode;
  },
  findPrevious: function findPrevious(el) {
    var curNode = this.head;

    while (curNode.next !== null && curNode.next.el !== el) {
      curNode = curNode.next;
    }

    return curNode;
  },
  insert: function insert(newEl, el) {
    var newNode = new Node(newEl);
    var findNode = this.find(el);
    newNode.next = findNode.next;
    findNode.next = newNode;
  },
  remove: function remove(el) {
    var preNode = this.findPrevious(el);
    // const nextNode = this.find(el)
    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  },
  display: function display() {
    var curNode = this.head;
    while (curNode.next !== null) {
      console.info(curNode.next.el);
      curNode = curNode.next;
    }
  }
};

export default LinkList;