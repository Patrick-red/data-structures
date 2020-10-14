class Quene {
  constructor() {
    this.items = [];
  }
  enquene(item) {
    this.items.push(item);
  }
  dequene() {
    return this.isEmpty() ? new Error("no item in Quene") : this.items.shift();
  }
  front() {
    return this.isEmpty() ? new Error("no item in Quene") : this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
