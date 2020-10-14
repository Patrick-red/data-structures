class Node {
  constructor(el) {
    this.prev = null;
    this.el = el;
    this.next = null;
  }
}
class doubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  append(el) {
    let node = new Node(el);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  insert(el, pos) {
    let node = new Node(el);
    if (pos < 0 || pos > this.length) {
      return new Error("Invalid pos");
    }
    if (pos === 0) {
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    } else if (pos === this.length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      let current = this.head;
      let previos,
        index = 0;
      while (index++ < pos) {
        previos = current;
        current = current.next;
      }
      previos.next = node;
      node.prev = previos;
      current.prev = node;
      node.next = current;
    }
    this.length++;
    return true;
  }
  remove(el) {
    let index = this.indexOf(el);
    this.removeAt(index);
  }
  removeAt(pos) {
    let current = this.head;
    let previos,
      index = 0;
    if (pos < 0 || pos >= this.length) {
      return new Error("Invalid pos");
    }
    if (pos === 0) {
      this.head = current.next;
      if (this.length === 1) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if (pos === this.length - 1) {
      current = this.tail;
      previos = current.prev;
      previos.next = null;
      this.tail = previos;
    } else {
      while (index++ < pos) {
        previos = current;
        current = current.next;
      }
      previos.next = current.next;
      current.next.prev = previos;
    }
    this.length--;
    return current.el;
  }
  indexOf(el) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.el === el) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  getHead() {
    return this.head;
  }
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.el;
      current = current.next;
    }
    return str;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0;
  }
}
