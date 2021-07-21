/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.tail === null) this.tail = newNode;

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error('List cannot be empty');
    }

    const popValue = this.tail.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let current = this.head;
      while (current !== null) {
        if (current.next.val === popValue) {
          this.tail = current;
          break;
        }
        current = current.next;
      }
      this.length--;
    }

    return popValue;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error('List cannot be empty');
    }

    const headValue = this.head.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.length--;
    }

    return headValue;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length === 0) {
      throw new Error('List cannot be empty');
    }

    if (!(idx >= 0 && idx < this.length)) {
      throw new Error('index not valid');
    }

    let current = this.head;
    let currentIdx = 0;
    while (current !== null) {
      if (currentIdx === idx) {
        return current.val;
      }
      current = current.next;
      currentIdx++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
