class Dictionary {
  constructor() {
    this.items = {};
  }
  has(item) {
    return this.items.hasOwnProperty(item);
  }
  clear() {
    this.item = {};
  }
  set(item, value) {
    this.items[item] = value;
  }
  remove(item) {
    if (this.has(item)) {
      delete this.items[item];
      return true;
    }
    return false;
  }
  get(item) {
    return this.has(item) ? this.items[item] : undefined;
  }
  values() {
    return Array.from(Object.values(this.items));
  }
  keys() {
    return Array.from(Object.keys(this.items));
  }
  size() {
    return this.keys().length;
  }
  getItems() {
    return this.items;
  }
}
