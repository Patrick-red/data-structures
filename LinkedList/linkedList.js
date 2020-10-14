class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  append(el) {
    let node = new Node(el);
    let current = this.head;
    if (this.isEmpty()) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  insert(el, pos) {
    if (pos < 0 || pos > this.length) {
      return new Error("Invalid pos");
    }
    let node = new Node(el);
    let index = 0,
      previos;
    let current = this.head;
    if (pos === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (index++ < pos) {
        previos = current;
        current = current.next;
      }
      previos.next = node;
      node.next = current;
    }
    this.length++;
    return true;
  }
  removeAt(pos) {
    let current = this.head;
    let index = 0,
      previos;
    if (pos < 0 || pos > this.length) {
      return new Error("Invalid pos");
    }
    if (pos === 0) {
      this.head = current.next;
    } else {
      while (index++ < pos) {
        previos = current;
        current = current.next;
      }
      previos.next = current.next;
    }
    this.length--;
    return current.el;
  }
  toString() {
    let res = "";
    let current = this.head;
    while (current) {
      res += current.el;
      current = current.next;
    }
    return res;
  }
  indexOf(el) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.el === el) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  remove(el) {
    let index = this.indexOf(el);
    this.removeAt(index);
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0;
  }
  getHead() {
    return this.head;
  }
}
