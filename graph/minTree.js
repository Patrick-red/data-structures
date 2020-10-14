/*-----------------------Prim--------------------*/
let matrix = [
  //邻接矩阵
  [0, 10, 65535, 65535, 65535, 11, 65535, 65535, 65535],
  [10, 0, 18, 65535, 65535, 65535, 16, 65535, 12],
  [65535, 65535, 0, 22, 65535, 65535, 65535, 65535, 8],
  [65535, 65535, 22, 0, 20, 65535, 65535, 16, 21],
  [65535, 65535, 65535, 20, 0, 26, 65535, 7, 65535],
  [11, 65535, 65535, 65535, 26, 0, 17, 65535, 65535],
  [65535, 16, 65535, 65535, 65535, 17, 0, 19, 65535],
  [65535, 65535, 65535, 16, 7, 65535, 19, 0, 65535],
  [65535, 12, 8, 21, 65535, 65535, 65535, 65535, 0],
];
class Graph {
  constructor() {
    this.dots = []; //存储点的表
    this.edges = []; //存储边的表，即邻接矩阵
    this.dotNum = 0; //点数
    this.edgeNum = 0; //边数
  }
  createGraph(dotNum, edgeNum, matrix) {
    //初始化表的点数，边数和邻接矩阵
    this.dotNum = dotNum;
    this.edgeNum = edgeNum;
    for (let i = 0; i < dotNum; i++) {
      this.dots[i] = "V" + i;
      this.edges[i] = [];
      for (let j = 0; j < dotNum; j++) {
        this.edges[i][j] = matrix[i][j];
      }
    }
  }
  miniTree() {
    //生成最小树
    let res = "";
    let lowDot = []; //存储最小权边的另一个点
    let lowEdge = []; //存储当前下标点所连接的最小权的边
    //从V0开始生成树，进行初始化
    for (let i = 0; i < this.dotNum; i++) {
      lowDot[i] = 0;
      lowEdge[i] = this.edges[0][i];
    }
    console.log(this.dotNum);
    for (let i = 1; i < this.dotNum; i++) {
      //最小树需要n-1条边，所以进行n-1次循环，每次找一条边
      let min = 65535;
      let k = 0;
      for (let j = 0; j < this.dotNum; j++) {
        //找出当前最小权的边
        if (lowEdge[j] !== 0 && lowEdge[j] < min) {
          min = lowEdge[j];
          k = j;
        }
      }
      //此时k表示当前最小权边的点
      res += `${this.dots[lowDot[k]]}-->${this.dots[k]}  in ${lowEdge[k]} \n`;
      lowEdge[k] = 0;
      for (let j = 0; j < this.dotNum; j++) {
        //更新每个点的最小权边和最小权边的另一个点
        if (lowEdge[j] > this.edges[k][j]) {
          lowEdge[j] = this.edges[k][j];
          lowDot[j] = k;
        }
      }
    }
    return res;
  }
}

/*-----------------------克鲁斯卡算法--------------------*/
let matrix = [
  //邻接矩阵
  [0, 10, 65535, 65535, 65535, 11, 65535, 65535, 65535],
  [10, 0, 18, 65535, 65535, 65535, 16, 65535, 12],
  [65535, 65535, 0, 22, 65535, 65535, 65535, 65535, 8],
  [65535, 65535, 22, 0, 20, 65535, 65535, 16, 21],
  [65535, 65535, 65535, 20, 0, 26, 65535, 7, 65535],
  [11, 65535, 65535, 65535, 26, 0, 17, 65535, 65535],
  [65535, 16, 65535, 65535, 65535, 17, 0, 19, 65535],
  [65535, 65535, 65535, 16, 7, 65535, 19, 0, 65535],
  [65535, 12, 8, 21, 65535, 65535, 65535, 65535, 0],
];
class Edge {
  constructor(i, j, cost) {
    this.begin = i;
    this.end = j;
    this.cost = cost;
  }
  getCost() {
    return this.cost;
  }
  getBegin() {
    return this.begin;
  }
  getEnd() {
    return this.end;
  }
}
function changeMatrixToEdgeArray(matrix) {
  let res = [];
  const rows = matrix.length;
  const cols = rows;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] !== 0 && matrix[i][j] !== 65535) {
        res.push(new Edge(i, j, matrix[i][j]));
        matrix[i][j] = 65535;
        matrix[j][i] = 65535;
      }
    }
  }
  return res.sort((a, b) => a.getCost() - b.getCost());
}
function kruskal(matrix) {
  let edges = changeMatrixToEdgeArray(matrix);
  let way = new Array(matrix.length).fill(0); //存储路径
  let res = [];
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let n = findEnd(way, edge.getBegin());
    let m = findEnd(way, edge.getEnd());
    console.log(way, n, m);
    if (n !== m) {
      //此时无环
      res.push(edge);
      way[n] = m;
    }
  }
  return res;
}
function findEnd(arr, start) {
  //寻找当前点所在路径的终点
  while (arr[start]) {
    start = arr[start];
  }
  return start;
}
console.log("result=", kruskal(matrix));
