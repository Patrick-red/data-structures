class Graph {
  constructor() {
    this.verticies = [];
    this.eages = new Dictionary();
  }
  addVertex(dot) {
    this.verticies.push(dot);
    this.eages.set(dot, []);
  }
  addEdge(a, b) {
    if (this.verticies.indexOf(a) === -1 || this.verticies.indexOf(b) === -1) {
      return new Error("the dots is not all in graph");
    }
    this.eages.get(a).push(b); //根据有向图无向图更改
    this.eages.get(b).push(a);
  }
  toString() {
    let res = "";
    this.verticies.forEach((value) => {
      res += value + "->";
      let eages = this.eages.get(value);
      eages.forEach((value) => {
        res += value + ",";
      });
      res += "\n";
    });
    return res;
  }
}
