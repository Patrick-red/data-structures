class QueneItem {
  constructor(item, priority) {
    this.item = item;
    this.priority = priority;
  }
}
class Quene {
  constructor() {
    this.items = [];
  }
  enquene(item, priority) {
    let el = new QueneItem(item, priority);
    if (this.isEmpty()) {
      this.items.push(el);
      return;
    } else {
      let i = 0;
      while (this.items[i]) {
        if (this.items[i].priority < el.priority) {
          this.items.splice(i, 0, el);
          return;
        }
        i++;
      }
      this.items.push(el);
    }
  }
  //...其他方法
}
