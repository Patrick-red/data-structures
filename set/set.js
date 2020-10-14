class Set {
  constructor() {
    this.set = {};
  }
  has(item) {
    return this.set.hasOwnProperty(item);
  }
  clear() {
    this.set = {};
  }
  add(...arg) {
    arg.forEach((item) => {
      if (this.has(item)) {
        return false;
      } else {
        this.set[item] = item;
        return true;
      }
    });
  }
  remove(item) {
    if (this.has(item)) {
      delete this.set[item];
      return true;
    } else {
      return false;
    }
  }
  size() {
    return Object.keys(this.set).length;
  }
  values() {
    return Array.from(Object.keys(this.set));
  }
}
