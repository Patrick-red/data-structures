class Stack {
  constructor() {
    this.items = [];
  }
  pop() {
    return this.isEmpty() ? new Error("no item in Stack") : this.items.pop();
  }
  push(item) {
    this.items.push(item);
  }
  peek() {
    return this.isEmpty()
      ? new Error("no item in Stack")
      : this.items[this.size() - 1];
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
