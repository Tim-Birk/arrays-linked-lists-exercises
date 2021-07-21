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

  setAt(idx, val) {
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
        current.val = val;
      }
      current = current.next;
      currentIdx++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (!(idx >= 0 && idx <= this.length)) {
      throw new Error('index not valid');
    }

    const newNode = new Node(val);
    if (this.length === 0) {
      // empty list
      this.head = newNode;
      this.tail = newNode;
    } else if (idx === 0) {
      // insert at beginning
      newNode.next = this.head;
      this.head = newNode;
    } else if (idx >= this.length - 1) {
      // >= in case adding the next existing index
      // insert at end
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // insert in middle
      let current = this.head;
      let currentIdx = 0;
      while (current !== null) {
        if (currentIdx === idx - 1) {
          newNode.next = current.next;
          current.next = newNode;
          break;
        }
        current = current.next;
        currentIdx++;
      }
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length === 0) {
      throw new Error('List cannot be empty');
    }

    if (!(idx >= 0 && idx <= this.length - 1)) {
      throw new Error('index not valid');
    }

    let removeVal = null;
    if (this.length === 1) {
      // remove only value in list
      removeVal = this.head.val;
      this.head = null;
      this.tail = null;
    } else if (idx === 0) {
      // remove at beginning
      removeVal = this.head.val;
      this.head = this.head.next;
    } else {
      // remove in middle
      let current = this.head;
      while (current !== null) {
        if (currentIdx === idx - 1) {
          removeVal = current.next.val;
          if (currentIdx + 1 === this.length) {
            // the tail is being removed
            current.next = null;
            this.tail = current;
          } else {
            current.next = current.next.next;
          }
          break;
        }
        current = current.next;
        currentIdx++;
      }
    }

    this.length--;
    return removeVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }

    let sum = 0;
    let current = this.head;
    while (current !== null) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
