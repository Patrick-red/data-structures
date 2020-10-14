class HashTable {
  constructor() {
    this.table = [];
  }
  loseloseHashCode(str) {
    let n = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      n += str.charCodeAt(i);
    }
    return n % 100; //  根据需要table的长度决定100位置的数
  }
  put(key, val) {
    let hash = this.loseloseHashCode(key);
    console.log(hash + " - " + key);
    this.table[hash] = val;
  }
  get(key) {
    let hash = this.loseloseHashCode(key);
    return this.table[hash];
  }
  remove(key) {
    let hash = this.loseloseHashCode(key);
    this.table[hash] = undefined;
  }
}

/*----------------------------线性探测法---------------------------------*/
class XXHashTable {
  constructor() {
    this.keys = [];
    this.values = [];
  }
  loseloseHashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      hash += str.charCodeAt(i);
    }
    return hash % 37;
  }
  put(key, value) {
    let pos = this.loseloseHashCode(key);
    while (this.keys[pos] !== undefined) {
      pos++;
    }
    console.log(pos + " - " + key);
    this.keys[pos] = key;
    this.values[pos] = value;
  }
  get(key) {
    let pos = this.loseloseHashCode(key);
    while (this.keys[pos] !== key && this.keys[pos] !== undefined) {
      pos++;
    }
    return this.values[pos];
  }
  remove(key) {
    let pos = this.loseloseHashCode(key);
    while (this.keys[pos] !== key && this.keys[pos] !== undefined) {
      pos++;
    }
    this.values[pos] = undefined;
  }
}

/*----------------------------拉链法---------------------------------*/
class LLItem {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
class LLHashTable {
  constructor() {
    this.table = [];
  }
  loseloseHashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37; //37为一般定义为table的长度，余数结果就是0-36
  }
  put(key, value) {
    let pos = this.loseloseHashCode(key);
    if (this.table[pos] === undefined) {
      this.table[pos] = new LinkedList();
    }
    this.table[pos].append(new LLItem(key, value));
  }
  get(key) {
    let pos = this.loseloseHashCode(key);
    if (this.table[pos] !== undefined) {
      let current = this.table[pos].getHead();
      while (current) {
        if (current.el.key === key) {
          return current.el.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }
  remove(key) {
    let pos = this.loseloseHashCode(key);
    if (this.table[pos] !== undefined) {
      let current = this.table[pos].getHead();
      while (current) {
        if (current.el.key === key) {
          this.table[pos].remove(current.el);
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}
